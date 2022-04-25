import React from 'react'
import { Button, View } from '@tarojs/components'
import { createRemotePage } from '@mini-hot/taro'

export default createRemotePage(
    async () => {
        await new Promise(r => {
            setTimeout(r, 2000)
        })
        if (Math.random() > 0.5) {
            // 随机出错
            console.error('运气不好，失败了！❌')
            throw 'error'
        }
        console.log('运气不错，成功了！ ✅')

        return import('./RemotePage')
    },
    {
        onLoading: () => {
            return () => <View>Loading...</View>
        },
        onError: reload => {
            return () => (
                <View>
                    Error !! <Button onClick={reload}>点击重试</Button>
                </View>
            )
        },
        prefetch: true,
        timeout: 3000,
    }
)
