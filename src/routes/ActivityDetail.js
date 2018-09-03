import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Activity.less';
import { translate, qiniu, html, changeTitle } from '../utils/utils'

@connect(({
  language,
  activity,
}) => ({
  language,
  activity
}))

export default class ActivityDetail extends Component {
  state = {}
  componentDidMount() {
    const { dispatch, match } = this.props
    const { params } = match
    dispatch({
      type: 'activity/fetch',
      payload: params
    })
  }
  render() {
    const { language, activity } = this.props
    const { header, lang } = language
    const title = lang === 'en-US' ? activity.title_En : activity.title 
    changeTitle(title)
    return (
      <div className={styles.activity}>
        <div className={styles.activityDetail}>
          {
            activity && activity.id && (
              <div className={styles.activityDelContent}>
                <div className={styles.detailTitle}>{translate({'zh': activity.title, 'en': activity.title_En})}</div>
                <div id="description" >{lang === 'en-US' ?  html(activity.activityContent_En, '#description') : html(activity.activityContent, '#description')}</div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

