import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import HeadAds from '../components/HeadAds'
import { changeTitle } from '../utils/utils'

import styles from './Intern.less';


class Intern extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'page/fetch',
      payload: {
        type: 1
      }
    })
  }
  render() {
    const { page: { detail }, language: { lang, header } } = this.props
    changeTitle(header.internship)
    return (
      <div className={styles.internContent}>
        <HeadAds codeString={'header.internship'} />
        <div className={styles.internBox}>
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
}))(Intern)