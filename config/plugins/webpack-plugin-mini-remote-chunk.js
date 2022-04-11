const fse = require('fs-extra')
const path = require('path')

const PLUGIN_NAME = 'miniRemoteChunkPlugin'

function isDynamicDep(dep) {
    if (!dep || !dep.type) {
        return false
    }
    return dep.type.startsWith('import()');
}
  
function isEntryDep(dep) {
  return dep.type === 'single entry' || dep.type === 'multi entry';
}

function getModuleId(module) {
    return module.userRequest
}

class MiniRemoteChunkPlugin {
    dynamicDeps = new Set()
    dynamicDepsMap = new Map()

    constructor(o) {
        console.log('constructor : ', o)
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
            compilation.hooks.finishModules.tap(PLUGIN_NAME, (modules) => {
                modules.forEach(module => {
                    const { reasons = [] } = module
                    const moduleId = getModuleId(module)
                    const isDynamic = reasons.every(reason => {
                        return isDynamicDep(reason.dependency)
                    })
                    if (isDynamic) {
                        this.dynamicDeps.add(moduleId)
                        this.dynamicDepsMap.set(moduleId, module)
                    }
                })
            })
        })
        compiler.hooks.afterCompile.tap(PLUGIN_NAME, () => {
            return true
        })
    }

    collectDynamicModules(modules) {}
}

module.exports = {
    MiniRemoteChunkPlugin,
}
