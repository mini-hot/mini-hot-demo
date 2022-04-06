const fse = require('fs-extra')
const path = require('path')

const PLUGIN_NAME = 'miniRemoteChunkPlugin'
// cjs require

function isDynamicDep(dep) {
    return dep.type.startsWith('cjs require');
}
  
function isEntryDep(dep) {
  return dep.type === 'single entry' || dep.type === 'multi entry';
}

function getModuleId(module) {
    return module.useRequest
}

class MiniRemoteChunkPlugin {
    dynamicDeps = new Set()

    constructor(o) {
        console.log('constructor : ', o)
    }

    apply(compiler) {
        compiler.hooks.beforeCompile.tap(
            PLUGIN_NAME,
            ({ normalModuleFactory }) => {
                normalModuleFactory.hooks.afterResolve.tap(PLUGIN_NAME, (resolveModule) => {
                    const { request, dependencies, resource } = resolveModule;
                    if (dependencies.length > 1) {
                        console.log(dependencies.length)
                        console.log(dependencies, dependencies.length)
                    }
                    const moduleId = getModuleId(resolveModule)
                    const isDynamic = dependencies.some(dep => {
                        return isDynamicDep(dep) && resource.indexOf('node_modules') === -1
                    })
                    if (isDynamic) {
                        this.dynamicDeps.add(moduleId)
                    }
                })
            }
        )
        compiler.hooks.afterCompile.tap(PLUGIN_NAME, () => {
            console.log(this.dynamicDeps)
            return true
        })
    }

    collectDynamicModules(modules) {}
}

module.exports = {
    MiniRemoteChunkPlugin,
}
