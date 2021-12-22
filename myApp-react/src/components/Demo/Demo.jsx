import React, { Component } from 'react'

//导入redux 
import { connect } from 'react-redux';//连接器
import { bindActionCreators } from "redux";
import * as reduxFunc from '../../action'
// import { fetchQueryData, loadData } from '../../action';

class Demo extends Component {

    // 此部分可以省略
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    //组件加载完成执行的生命周期函数
    componentDidMount = () => {

        console.log(this.props)
    };
    //组件更新时执行的生命周期函数
    componentDidUpdate = (preState, preProps) => {
        console.log(preProps, preState)
    };
    //组件将要卸载执行的生命周期钩子函数
    componentWillUnmount = () => {

    }
    render() {
        const { p } = this.props
        return (
            <div>
                舒服舒服afsafsfsddasdasdasdasdasd
                <p>{ }</p>
            </div>
        )
    }
};

const mapStateToprops = state => {
    const { a } = state.httpData;
    const { hel, p } = state.staticData;
    return { hel, a, p }
};

const mapDispatchToprops = dispatch => ({
    fetchQueryData: bindActionCreators(reduxFunc.fetchQueryData, dispatch),
    loadData: bindActionCreators(reduxFunc.loadData, dispatch),
})

export default connect(mapStateToprops, mapDispatchToprops)(Demo)
