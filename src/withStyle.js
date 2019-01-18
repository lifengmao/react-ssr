import React, { Component } from 'react';

// 返回一个组件 生成高阶组件的函数
export default (DecoratedComponent,styles) => {
  return class NewComponent extends Component {
    componentWillMount() {
      this.props.staticContext &&  (this.props.staticContext.css.push(styles._getCss()))
    }
    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}