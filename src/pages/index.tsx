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
                跳转到「远程页面」
            </Button>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/dynamic/index',
                    })
                }}
            >
                跳转到 「带配置远程页面」
            </Button>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: `/pages/dynamic-app/spa?mini-hot=${encodeURIComponent('/PageA/001?a=1')}`,
                    })
                }}
            >
                跳转到 「SPA - PageA」
            </Button>
            <Button
                onClick={() => {
                    Taro.navigateTo({
                        url: `/pages/dynamic-app/spa?mini-hot=/PageB`,
                    })
                }}
            >
                跳转到 「SPA - PageB」
            </Button>
        </View>
    )
}
