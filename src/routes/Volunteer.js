import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { changeTitle } from '../utils/utils'
import styles from './Volunteer.less';


class Volunteer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'page/fetch',
      payload: {
        type: 2
      }
    })
  }
  render() {
    const { page: { detail }, language: { lang, header } } = this.props
    changeTitle(header.volunteering)
    return (
      <div className={styles.internContent}>
        <div className={styles.hdImg}>
          <img style={{height: '100%', width: '100%'}} src={require('../assets/shadows.jpg')} alt="" />
        </div>
        <div className={styles.volunteerBox}>
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
}))(Volunteer)