import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Activity.less';
import { translate, qiniu, changeTitle } from '../utils/utils'
const headerImg = require('../assets/activity/venue-rental.jpg')

@connect(({
  language,
  activity,
}) => ({
  language,
  activity
}))

export default class ActivityVenue extends Component {
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
    const { events, lang, header } = language
    changeTitle(header.artvenue)
    return (
      <div className={styles.activity}>
        <div className={styles.venueBody}>
          <div>
            <img src={headerImg} alt="img"/>
          </div>
          {
            events && (
              <div className={styles.venue}>
                <div className={styles.venueTitle}>
                  {events.venue}
                </div>
                <div className={styles.venueContent}>
                  <p>{events.venue1}</p>
                  <p></p>
                  <p>{events.venue2}</p>
                  <p></p>
                  <p>{events.venue3}</p>
                  <p></p>
                  <p>{events.venue4}</p>
                  <p></p>
                  {
                    events.venue5 && (
                      <div>
                        <p> {events.venue5}</p>
                        <p></p>
                      </div>
                    )
                  }
                  <ul className={styles.rules}>
                    <li>{events.venue6}</li>
                    <li>{events.venue7}</li>
                    <li>{events.venue8}</li>
                    <li>{events.venue9}</li>
                    <li>{events.venue10}</li>
                    <li>{events.venue11}</li>
                    <li>{events.venue12}</li>
                  </ul>
                  <p>{events.venue13}</p>
                  <p></p>
                  <p><a href="http://ob12cjyvc.bkt.clouddn.com/yuzm/YUZ%20Museum%20Space_update_20151209.pdf">{events.venue14}</a></p>
                </div>
              </div>
            )
          }
        </div>
     
      </div>
    )
  }
}

