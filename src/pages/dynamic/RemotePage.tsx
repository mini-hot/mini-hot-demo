import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        console.log('componentDidMount')
        Taro.setNavigationBarTitle({
            title: '这是个远程页面',
        })
    }
    componentDidShow() {
        console.log('componentDidShow')
    }
    render() {
        return <View>this is RemotePage</View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
