import React, { Component } from 'react';
import HeadAds from '../components/HeadAds'
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Carousel } from 'antd'
import styles from './Activity.less';
import { translate, qiniu, qsParams, changeTitle } from '../utils/utils'

@connect(({
  language,
  activity,
}) => ({
  language,
  activity,
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
    let codeString
    const projectText = function(){ // 切换展览，活动项目名称
      if(!header || !params || !params.type) return
      if(Number(params.type) === 1) {
        switch (Number(params.searchType)) {
          case 1:
            codeString = 'header.upcoming'
            return header.upcoming
          case 2:
            codeString = 'header.past'
            return header.past
          case 3:
            codeString = 'header.current'
            return header.current
        }
      }
      if(Number(params.type) === 2){
        codeString = 'header.artevents'
        return header.artevents
      }
      if(Number(params.type) === 3){
        codeString = 'header.educational'
        return header.educational
      }
    }
    changeTitle(projectText())
    const activitySchedule = (item) => {
      if(params.type !== '2' || !item.startTime) return
      let d, start, end, date, time
      if(lang === 'zh-CN') {
        d = item.startTime.split('T')[0].split('-')
        date = `${d[1]}月 ${d[2]}日`
      }else {
        d = new Date(item.startTime).toString()
        d = d.split(' ')
        date = `${d[1]} ${d[2]}th`
      }
      start = item.startTime.split('T')[1].substr(0, 5)
      end = item.endTime.split('T')[1].substr(0, 5)
      time = start == end ? start : start + ' - ' + end
      return (
        <div>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      )

    }
    return (
      <div className={styles.activity}>
      {
        language && params && (
          <div>
            <HeadAds codeString={codeString} />
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
                                    <div className={params.type === '2' ? styles.briefTitle2 : styles.briefTitle}>
                                      <div>{translate({'zh': item.title, 'en': item.title_En})}</div>
                                      {
                                        activitySchedule(item)
                                      }
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

