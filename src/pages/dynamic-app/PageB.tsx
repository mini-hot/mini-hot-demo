import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ComponentB  from './components/ComponentB'

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
        return <View>
            这是个 PageB
            <ComponentB />
        </View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
