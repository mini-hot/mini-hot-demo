import React, { Component, Suspense } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
export default class extends Component {

    componentDidMount = () => {
        console.log(this.props)
        Taro.setNavigationBarTitle({
            title: '这是个 PageA',
        })
    }
    componentDidShow() {
        console.log('PageA componentDidShow')
    }
    render() {
        return <View>
            这是个 PageA
            <ComponentA />
            <ComponentB />
        </View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
