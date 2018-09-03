import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './GlobalFooter.less'
const contact = require('../assets/global/contcat_btn.jpg')

@connect(({
  language,
}) => ({
  language,
})) 
export default class GlobalFooter extends Component {

  render() {
    const { language } = this.props
    const { home } = language
    return (
      <div className={styles.GlobalFooter}>
        <div className={styles.item1}>
          <div className={styles.subItem}>
            <div className={styles.adderss}>{home && home.address}</div>
            <div className={styles.adderss}>{home && home.address1}</div>
          </div>
          <div className={styles.subItem}>
            <img src={contact} alt="icon"/>
          </div>
        </div>
        <div>
          沪ICP备：14037462号
        </div>
      </div>
    )
  }
}