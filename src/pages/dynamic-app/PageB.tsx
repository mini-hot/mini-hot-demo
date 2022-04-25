import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        console.log(this.props)
        Taro.setNavigationBarTitle({
            title: '这是个 PageB',
        })
    }
    componentDidShow() {
        console.log('PageB componentDidShow')
    }
    render() {
        return <View>这是个 SPA 模式下的 PageB</View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
