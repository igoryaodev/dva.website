import React, { Component } from 'react'
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './GlobalHeader.less'
const logo = require('../assets/logo/logo.jpg')

@connect(({
  language,
}) => ({
  language,
}))
export default class Menu extends Component {

  state = {
    lang: window.localStorage['lang'] || 'zh-CN'
  }
  changeCN(){
    const { dispatch } = this.props
    window.localStorage['lang'] = 'zh-CN'
    this.setState({
      lang: 'zh-CN'
    })
    dispatch({
      type: 'language/fetch'
    })
  }
  changeEN(){
    const { dispatch } = this.props
    window.localStorage['lang'] = 'en-US'
    this.setState({
      lang: 'en-US'
    })
    dispatch({
      type: 'language/fetch'
    })
  }

  render() {
    const { lang } = this.state
    return (
      <div className={styles.logo}>
        <Link to='/home'>
          <img src={logo} alt='logo' />
        </Link>
        <div className={styles.langCN} onClick={() => this.changeCN()} style={{color:lang!=='en-US'?'#862d2c':'#333'}}>
          CN
        </div>
        <div className={styles.langEN} onClick={() => this.changeEN()} style={{color:lang==='en-US'?'#862d2c':'#333'}}>
          | EN
        </div>
      </div>
    )
  }
}