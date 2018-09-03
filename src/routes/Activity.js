import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Carousel } from 'antd'
import styles from './Activity.less';
import { translate, qiniu, qsParams, changeTitle } from '../utils/utils'
const headerImg = require('../assets/activity/yuzm-support.jpg')
const artHeaderImg = require('../assets/activity/imgtop.png')
const eduHeaderImg = require('../assets/activity/yuzm-edu-top.jpg')
const edu = require('../assets/activity/edu1.jpg')

@connect(({
  language,
  activity,
}) => ({
  language,
  activity
}))

export default class Activity extends Component {
  state = {}
  componentDidMount() {
    const { dispatch } = this.props
    const { hash } = window.location
    let params = qsParams(hash)
    if(!params) params = {
      type: 1,
      searchType: 3
    }
    if(!params.type) params.type = 1
    dispatch({
      type: 'activity/fetch',
      payload: params
    })
  }
  render() {
    const { hash } = window.location
    const params = qsParams(hash)
    const { language, activity } = this.props
    const { list } = activity
    const { header, lang } = language

    const projectText = function(){ // 切换展览，活动项目名称
      if(!header || !params || !params.type) return
      if(Number(params.type) === 1) {
        switch (Number(params.searchType)) {
          case 1:
            return header.upcoming
          case 2:
            return header.past
          case 3:
            return header.current
        }
      }
      if(Number(params.type) === 2){
        return header.artevents
      }
      if(Number(params.type) === 3){
        return header.educational
      }
    }
    changeTitle(projectText())
    return (
      <div className={styles.activity}>
      {
        language && params && (
          <div>
            <div>
            {
              params.type === '1' ? (
                <img className={styles.headerTopImg} src={headerImg} alt="img"/>
              ) : params.type === '2' && (
                <img className={styles.headerTopImg} src={artHeaderImg} alt="img"/>
              )
            }
            </div>
            {
                  /*
                  * 展览：在展，过往，即将
                  * 活动：不为公教项目
                  */
              params.type !== '3' && (
                <div className={styles.activityContent} >
                  <div className={styles.offset}></div>
                        <div className={styles.row}>
                          <div className={styles.actTitle}>
                            {
                              projectText()
                            }
                          </div>
                          {
                           list && list[0] ? list.map((item, index) => {
                              let url = `/activityDetail/${item.id}`
                              return (
                                <Link to={url} className={styles.actRows} key={index} style={{paddingTop:index === 0 ? '50px' : '30px'}}>
                                  <div className={styles.cellHd}>
                                    <div className={styles.briefTitle}>
                                      {translate({'zh': item.title, 'en': item.title_En})}
                                    </div>
                                    <div className={styles.brief}>{translate({'zh': item.name, 'en': item.name_En})}</div>
                                  </div>
                                  <div className={styles.cellMd}>
                                    <img src={translate({'zh': qiniu(item.titleImage), 'en': qiniu(item.titleImageEn)})} alt="img"/>
                                  </div>
                                </Link>
                              )
                            }) : (
                              <div className={styles.actRows}></div>
                            )
                          }
                        </div>
                     
                </div>
              )
            }
            {
              /*
              * 活动：公教项目
              */
              params.type === '3' && (
                <div className={styles.eduRow}>
                  <div>
                    <img src={eduHeaderImg} alt="img" />
                  </div>
                  <div className={styles.rowbox}>
                     {
                      list && list[0] && list.map((item, index) =>{
                        let url = `/activityDetail/${item.id}`
                        return (
                          <Link to={url} className={styles.eduItem} key={index}>
                            <div>
                              <img src={translate({'zh': qiniu(item.titleImage), 'en': qiniu(item.titleImageEn)})} alt="img" />
                            </div>
                            <div>
                              <p className={styles.eduTitle}>
                                {translate({'zh': item.title, 'en': item.title_En})}
                              </p>
                              <p className={styles.eduTime}>
                                {translate({'zh': item.name, 'en': item.name_En})}
                              </p>
                            </div>
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
              )
            }

          </div>
        )
      }
     
      </div>
    )
  }
}

