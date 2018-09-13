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
  componentWillUnmount() {
    const { dispatch, match } = this.props
    dispatch({
      type: 'activity/clear',
      payload: ''
    })
  }
  render() {
    const { language, activity } = this.props
    const { header, lang } = language
    const title = lang === 'en-US' ? activity.title_En : activity.title 
    const htmlString = () => {
      return {
        __html: lang === 'en-US' ? activity.activityContent_En : activity.activityContent 
      }
    }
      
    changeTitle(title)
    return (
      <div className={styles.activity}>
        <div className={styles.activityDetail}>
          {
            activity && activity.id && (
              <div className={styles.activityDelContent}>
                <div className={styles.detailTitle}>{translate({'zh': activity.title, 'en': activity.title_En})}</div>
                <div id="description" dangerouslySetInnerHTML={htmlString()}>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

