import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { changeTitle } from '../utils/utils'

import styles from './Sponsor.less';

class Sponsor extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'page/fetch',
      payload: {
        type: 3
      }
    })
  }
  render() {
    const { page: { detail }, language: { lang, sponsor } } = this.props
    changeTitle(sponsor.sponsor)
    return (
      <div className={styles.internContent}>
        <div className={styles.hdImg}>
          <img style={{height: '100%', width: '100%'}} src={require('../assets/yuzm-support.jpg')} alt="" />
        </div>
        <div className={styles.sponsorBox}>
          <div id="description" dangerouslySetInnerHTML={{
            __html: lang == 'en-US' ? detail.webInfo_En : detail.webInfo
          }}></div>
        </div>
      </div>
    )
  }
}
export default connect(({page, language}) => ({
  page,
  language
}))(Sponsor)