import React, { Component } from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd'
import styles from './HomePage.less';
@connect(({
  test,
}) => ({
  test,
}))
export default class test extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'test/fetch'
    })
  }

  testCookies() {
    const { dispatch } = this.props
    dispatch({
      type: 'test/fetchTest'
    })

  }
  testSession() {
    const { dispatch } = this.props
    dispatch({
      type: 'test/fetchSession'
    })

  }
  render() {
    return (
      <div className={styles.HomePage}>
        <div className={styles.swipers}>
        <h1>
          <button onClick={() => this.testCookies()}>cookies click</button>
        </h1>
        <h1>
          <button onClick={() => this.testSession()}>session click</button>
        </h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </div>
     
      </div>
    )
  }
}

