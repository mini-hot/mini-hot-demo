const fse = require('fs-extra')
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin')
const path = require('path')

const PLUGIN_NAME = 'miniRemoteChunkPlugin'

function isDynamicDep(dep) {
    if (!dep || !dep.type) {
        return false
    }
    return dep.type.startsWith('import()')
}

function getModuleId(module) {
    return module.userRequest || module._identifier
}

class MiniRemoteChunkPlugin extends SplitChunksPlugin {
    dynamicModules = new Set()
    options = null

    constructor(o) {
        super(o)
    }

    apply(compiler) {
        super.apply(compiler)
        compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
            compilation.hooks.finishModules.tap(PLUGIN_NAME, this.collectDynamicModules)
            compilation.hooks.optimizeChunks.tap(PLUGIN_NAME, chunks => {
                let _options = compiler.options.optimization.splitChunks
                _options.cacheGroups = this.getDynamicChunkCacheGroups(_options.cacheGroups)
                this.options = SplitChunksPlugin.normalizeOptions(_options)
            })
        })
    }

    collectDynamicModules = (modules) => {
        modules.forEach(module => {
            const { reasons = [] } = module
            const moduleId = getModuleId(module)
            const isDynamic = reasons.every(reason => isDynamicDep(reason.dependency))
            if (isDynamic) {
                this.dynamicModules.add(moduleId)
            }
        })
    }

    getDynamicChunkCacheGroups = (initialCacheGroups = {}) => {
        return Array.from(this.dynamicModules).reduce((cacheGroups, moduleId) => {
            const filename = path.basename(moduleId).split('.')[0]
            cacheGroups[filename] = {
                name: `/remote/${filename}`,
                test: module => {
                    return getModuleId(module) === moduleId
                },
                minChunks: 1,
                priority: 10000,
            }
            return cacheGroups
        }, initialCacheGroups)
    }
}

module.exports = {
    MiniRemoteChunkPlugin,
}
