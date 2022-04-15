const path = require('path')
const http = require('http')
const serveStatic = require('serve-static')
const getPort = require('get-port')
const finalhandler = require('finalhandler')
const MiniRemoteChunkWebpackPlugin = require('./webpack-plugin-mini-remote-chunk')
const colors = require('colors')

let isDevServerLaunch = false

module.exports = async (ctx, pluginOpts) => {
    const { runOpts, paths } = ctx

    if (runOpts.options.platform !== 'weapp') return

    const serverPort = await getPort({ port: devServerPort })

    const { publicPath, remoteChunkOutputPath, entryChunkUseCache, devServerPort = 9090 } = pluginOpts

    async function createServer() {
        try {
            if (isDevServerLaunch) return
            
            
            const serveStaticPath = path.join(paths.outputPath)

            const serve = serveStatic(serveStaticPath)

            var server = http.createServer((req, res) => {
                serve(req, res, finalhandler(req, res))
            })

            server.listen(serverPort)

            isDevServerLaunch = true

            console.log(colors.green(`\n✅  remote-chunk静态服务启动成功，端口： ${serverPort}\n`))
        } catch (error) {
            console.error(error)
            console.log(colors.red('\n❌ taro-mini-remote-chunk-plugin 静态服务启动失败 !\n'))
        }
    }

    function normalizeOptions() {
        return {
            publicPath: runOpts.options.isWatch ? `http://127.0.0.1:${serverPort}` : publicPath,
            remoteChunkOutputPath,
            entryChunkUseCache,
        }
    }

    ctx.onBuildStart(() => {
        if (runOpts.options.isWatch) {
            createServer()
        }
    })

    ctx.modifyWebpackChain(({ chain }) => {
        chain
            .plugin('mini-remote-plugin')
            .use(MiniRemoteChunkWebpackPlugin, [normalizeOptions()])
            .end()
    })
}
