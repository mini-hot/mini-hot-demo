import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        console.log(this.props)
        Taro.setNavigationBarTitle({
            title: '这是个 ComponentA',
        })
    }
    componentDidShow() {
        console.log('ComponentA componentDidShow')
    }
    render() {
        return <View>这是个 ComponentA</View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
