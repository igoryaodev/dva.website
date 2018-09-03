import React, { Component } from 'react'
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import Menu from './Menu'
import HeaderLogo from './HeaderLogo'
import styles from './GlobalHeader.less'
const searchIcon = require('../assets/global/search_light.png')

@connect(({
  language,
}) => ({
  language,
}))
export default class GlobalHeader extends Component {
  constructor(props) {
    super(props)
  }
  /*
  * 搜素框绑定回车事件
  */
  submit(e){
    if(e.keyCode === 13){
      if(window.location.hash.match(/^\#\/search/)){
        return window.location.reload()
      }
      if(!e.target.value) return
      const { dispatch } = this.props
      this.searchHandle(e)
      dispatch(routerRedux.push(`/search?wordkey=${e.target.value}`))
    }
  }
   searchHandle(e){
    const pb = document.querySelector('input[type="search"]')
    const ppb = document.querySelector('div[data-larger]')
    if(pb.style.display === 'block'){
      pb.style.display = 'none'
      ppb.style.paddingRight = '0'
    }else{
      pb.style.display = 'block'
      pb.focus()
      ppb.style.paddingRight = '80px'
    }
  }
  render () {
    const { language, dispatch } = this.props
    const { header } = language
    const { hash } = window.location
    return(
      <div className={styles.GlobalHeaderResize}>
        <div className={styles.HeaderLarge}>
          <div data-larger className={styles.GlobalHeader} style={{margin:hash && hash.match(/\#\/home/)?'0 -20px':0}}>
            <HeaderLogo dispatch={dispatch} />
            <Menu header={header} dispatch={dispatch} />
          </div>
        </div>
        <div className={styles.HeaderSmall}>
            <HeaderLogo dispatch={dispatch} />
            <div className={styles.smallMenu} data-smallmenu>
              <Menu header={header} dispatch={dispatch} />
            </div>
        </div>
        <div className={styles.searchRow}>
          <div className={styles.searchBar}>
            <input type="search" autoFocus="true" onKeyDown={(e) => this.submit(e)} />
            <img src={searchIcon} onClick={(e) => {this.searchHandle(e)}} alt="img"/>
          </div>
        </div>
      </div>
    )
  }
}