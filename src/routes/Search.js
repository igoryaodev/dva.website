import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';
import styles from './Search.less';
import { qsParams, translate } from '../utils/utils'

@connect(({
  language,
  activity,
}) => ({
  language,
  activity,
}))

export default class AboutUs extends Component {
  state = {
    
  }
  componentDidMount() {
    const { dispatch, location } = this.props
    const { search } = location
    if(search){
      const payload = qsParams(search)
      this.setState({
        wordkey: payload.wordkey,
      })
      dispatch({
        type: 'activity/fetch',
        payload:payload
      })
    }
  }
  render() {
    const { wordkey } = this.state
    const { activity } = this.props
    const { totalRecords, list } = activity
    return (
      <div className={styles.searchResult}>
        <h2 className={styles.searchTitle}>Search results for "{wordkey ? wordkey :''}"</h2>
        <div>
        {
          list && list[0] && list.map((item, index) => {

             let url = `/activityDetail/${item.id}`
             return (
              <article className={styles.article} key={index}>
                <div className={styles.searchItem}>
                  <Link to={url}>{translate({'zh':item.title, 'en': item.title_En})}</Link>
                  <div className={styles.searchItemContent}>
                    <p>{translate({'zh':item.name, 'en': item.name_En})}</p>
                  </div>
                </div>
              </article>
            )
          })
        }
        </div>
      </div>
    )
  }
}
