import React, { Component } from 'react'

//导入redux 
import { connect } from 'react-redux';//连接器
import { bindActionCreators } from "redux";
import * as reduxFunc from '../../action'

class Hel extends Component {
    componentDidMount = () => {
        this.props.fetchQueryData({
            funcName: 'getUsetInfo',
        }).then(res => {
            console.log(res);
        })
    }
    handleClick = () => {
        this.props.loadData({ mm: 'jhsjdh' }, 'p')
    }
    render() {
        return (
            <div>
                adasdass
                <button onClick={this.handleClick}>点击</button>
                <p>陈春梅</p>
            </div>
        )
    }
}

const mapStateToprops = state => {
    const { } = state.httpData;
    const { } = state.staticData;
    return {}
};

const mapDispatchToprops = dispatch => ({
    fetchQueryData: bindActionCreators(reduxFunc.fetchQueryData, dispatch),
    loadData: bindActionCreators(reduxFunc.loadData, dispatch),
})

export default connect(mapStateToprops, mapDispatchToprops)(Hel)
