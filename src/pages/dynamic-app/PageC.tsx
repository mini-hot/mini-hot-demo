import React, { Component, Suspense } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

const ComponentC = React.lazy(() => import('./components/ComponentC'))

export default class extends Component {

    componentDidMount = () => {
        console.log(this.props)
        Taro.setNavigationBarTitle({
            title: '这是个 PageC',
        })
    }
    componentDidShow() {
        console.log('PageC componentDidShow')
    }
    render() {
        return <View>
            这是个 PageC
            <Suspense fallback={<View>loading...</View>}>
                <ComponentC />
            </Suspense>
        </View>
    }
    onShareAppMessage = () => {
        return {}
    }
}
