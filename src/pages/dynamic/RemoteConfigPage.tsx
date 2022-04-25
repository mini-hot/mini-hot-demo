import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        console.log('componentDidMount')
        Taro.setNavigationBarTitle({
            title: 'RemoteConfigPage',
        })
    }
    componentDidShow() {
        console.log('componentDidShow')
    }
    render() {
        return <View>这是个通过复杂配置进入的远程页面</View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
