import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { changeTitle } from '../utils/utils'
import styles from './NewsList.less';

class NewsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'page/fetchPress',
      payload: {
        pageNo: 1
      }
    }) 
  }
  render() {
    const { page: { pressList }, language: { header } } = this.props;
    changeTitle(header.press)

    const pressArr = pressList.list && pressList.list.map((item) => {
      return (
        <Col md={16} xs={24} key={item.id}>
          <div className={`${styles.newsItem} ${styles.clearfix}`}>
            <p className={styles.pressLeft}>
              <b>{item.YUZMActivityDto.title}</b>
              <br />{moment(item.YUZMActivityDto.startTime).format('YYYY-MM-DD')} – {moment(item.YUZMActivityDto.endTime).format('YYYY-MM-DD')}
            </p>
            <div className={styles.pressRight}>
              <a download className={styles.download} href={item.pdfUrl} target="_blank">PDF下载</a>
              <a download style={{marginLeft: 8}} href={item.imageUrl} className={styles.download} target="_blank">图片下载</a>
            </div>
          </div>
        </Col>
      )
    })
    return (
      <div className={styles.newsContent}>
        <div className={styles.hdImg}>
          <img style={{height: '100%', width: '100%'}} src={require('../assets/yuz_top_pic1.jpg')} alt="" />
        </div>
        <div className={styles.container}>
          <Row className={styles.newsWrap}>
            <Col span={24}>
              <h2 className={styles.newsTitle}>媒体动态:</h2>
            </Col>
            {pressArr}
          </Row>
        </div>
      </div>
    )
  }
}
export default connect(({language, page}) => ({
  language,
  page
}))(NewsList)