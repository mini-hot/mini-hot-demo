import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        console.log(this.props)
        Taro.setNavigationBarTitle({
            title: '这是个 ComponentC',
        })
    }
    componentDidShow() {
        console.log('ComponentC componentDidShow')
    }
    render() {
        return <View>这是个 ComponentC</View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
