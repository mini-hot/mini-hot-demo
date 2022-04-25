import { Component } from 'react'
import * as eval5 from 'eval5';
import './app.less'

// @ts-ignore
wx.eval5 = eval5
class App extends Component {
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // this.props.children 就是要渲染的页面
    render() {
        return this.props.children
    }
}

export default App
