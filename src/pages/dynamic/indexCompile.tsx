import { createRemotePage } from '@mini-hot/taro'

const fakeRequest = async () => {
    await new Promise(res => {
        setTimeout(res, 300)
    })
    const remoteString = require('./RemotePage.remote').remoteString
    const { Interpreter } = require('eval5')

    const exports: any = {}

    const fakeRequire = (path: string) => {
        switch (path) {
            case '@tarojs/components':
                return require('@tarojs/components')
            case 'react':
                return require('react')
            case '@tarojs/taro':
                return require('@tarojs/taro')
        }
    }

    const interpreter = new Interpreter({ exports, require: fakeRequire }, { rootContext: globalThis })
    const startTime = new Date()
    interpreter.evaluate(remoteString)
    console.log('eval5 耗时' + (new Date().getTime() - startTime.getTime()))

    return exports
}

export default createRemotePage(() => fakeRequest())
