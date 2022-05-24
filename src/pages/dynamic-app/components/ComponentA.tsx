import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class extends Component {
    componentDidMount = () => {
        Taro.setNavigationBarTitle({
            title: '这是个 ComponentA',
        })
    }
    componentDidShow() {
        console.log('ComponentA componentDidShow')
    }
    render() {
        return (
            <View>
                <Text>这是个 ComponentA</Text>
                <Image src={require('./imgs/logo.png')} style={{ width: 100, height: 100 }}></Image>
            </View>
        )
    }
    onShareAppMessage = () => {
        return {}
    }
}
