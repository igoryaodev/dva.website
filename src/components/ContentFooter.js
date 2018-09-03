import React, { Component } from 'react'
import { connect } from 'dva'
import { Link, routerRedux } from 'dva/router';
import styles from './ContentFooter.less'
@connect(({
  language,
}) => ({
  language,
}))
export default class ContentFooter extends Component {

  scrollToAnchor(anchorName){
    const { hash } = window.location
    const { dispatch } = this.props
    if(!hash || (hash && !hash.match(/\#\/visit/))){
      dispatch(routerRedux.push(`/visit`))
    }
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
    
  }
  navigateTo(obj){
    const { dispatch } = this.props
    let url = `/activity?type=${obj.type}` 
    if(obj.searchType) url = url + `&searchType=${obj.searchType}`
    dispatch(routerRedux.push(url))
    dispatch({
      type: 'activity/fetch',
      payload: obj,
    })
  }

  render() {
    const { language } = this.props
    const { header } = language
    return (
      <div className={styles.ContentFooter}>
      {
        header && (
          <div className={styles.content}>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.visit}</span></div>
              <Link to="/visit">{header.guide}</Link>
              <div onClick={() => this.scrollToAnchor('cafe')}>{header.cafe}</div>
              <div onClick={() => this.scrollToAnchor('cafe')}>{header.store}</div>
            </div>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.exhibitions}</span></div>
              <div onClick={() => this.navigateTo({searchType:3,type:1})}>{header.current}</div>
              <div onClick={() => this.navigateTo({searchType:1,type:1})}>{header.upcoming}</div>
              <div onClick={() => this.navigateTo({searchType:2,type:1})}>{header.past}</div>
            </div>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.events}</span></div>
              <div>{header.whatson}</div>
              <div onClick={() => this.navigateTo({type:2})}>{header.artevents}</div>
              <div onClick={() => this.navigateTo({type:3})}>{header.educational}</div>
              <Link to='/activityVenue'>{header.artvenue}</Link>
            </div>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.support}</span></div>
              <Link to="/sponsor">{header.sponsorship}</Link>
              <div>{header.membership}</div>
            </div>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.joinus}</span></div>
              <div>{header.careers}</div>
              <Link to="/intern">{header.internship}</Link>
              <Link to="/volunteer">{header.volunteering}</Link>
            </div>
            <div className={styles.item}>
              <div><span className={styles.bottomLine}> {header.aboutus}</span></div>
              <Link to="/about-us">{header.yuzmuseum}</Link>
              <Link to="/news-list">{header.press}</Link>
              <Link to="/contact-us">{header.contactus}</Link>
            </div>
          </div>
        )
      }
      </div>
    )
  }
}