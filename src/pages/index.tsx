import React from 'react'
import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default () => {
    return (
        <View>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/dynamic/simple',
                    })
                }}
            >
                跳转到「简单 API Demo」
            </Button>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/dynamic/index',
                    })
                }}
            >
                跳转到 「自定义 Demo」
            </Button>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/dynamic/indexCompile',
                    })
                }}
            >
                跳转到 「远程代码 Demo」
            </Button>
        </View>
    )
}
