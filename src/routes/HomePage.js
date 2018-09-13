import React, { Component } from 'react';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import { Carousel, Input } from 'antd'
import { qiniu, changeTitle } from '../utils/utils'

// import { Carousel } from 'antd-mobile'
import styles from './HomePage.less';

const swipers = require('../assets/home/0.jpg')
const c_1 = require('../assets/home/c_1.jpg')
const c_2 = require('../assets/home/c_2.jpg')
const c_3 = require('../assets/home/c_3.jpg')
const c_4 = require('../assets/home/c_4.jpg')
const mail_icon = require('../assets/home/mail_icon.png')
const ticket_icon = require('../assets/home/ticket_icon.png')
const yuz_qrcode = require('../assets/home/yuz_qrcode.jpg')

const douban = require('../assets/home/douban.png')
const fb = require('../assets/home/fb.png')
const ig = require('../assets/home/ig.png')
const twit = require('../assets/home/twit.png')
const wechat = require('../assets/home/wechat.png')
const wechatcode = require('../assets/home/wechatcode.jpg')
const weibo = require('../assets/home/weibo.png')
const yuz = require('../assets/home/yuz_qrcode.jpg')

@connect(({
  language,
  homepage,
}) => ({
  language,
  homepage,
}))
class HomePage extends Component {
  state = {
    
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'homepage/fetch'
    })
    function delay(){
      const dots = document.querySelector('.ant-carousel .slick-dots')
      if(dots){
        dots.style = 'height:11px;'
        let dotsArr = document.querySelectorAll('.ant-carousel button')
        if(!dotsArr || !dotsArr[0]) return 
        for(var i=0;i<dotsArr.length;i++){
          if(dotsArr[i].tagName){
            dotsArr[i].style = 'height:11px;width:11px;overflow:hidden;border-radius:50%;margin:0 3px;'
          }
        }
      }else{
        setTimeout(() => {
          delay()
        }, 500)
      }
    }
    delay()
  }
  navigatorTo(e) {
    let { item } = e.target.dataset
    item = JSON.parse(item)
    // console.log(JSON.stringify(item))
    const { dispatch } = this.props
    if(item.YUZMActivityDto) {
      if(item.activityId > 0) dispatch(routerRedux.push(`/activityDetail/${item.activityId}`))
    }else {
      if(item.url) window.open(item.url)
    }
  }

  render() {
    const { language, homepage } = this.props
    const { home, lang, header } = language
    const { list } = homepage
    changeTitle(header.home)
    return (
      <div data-lang={lang} className={styles.HomePage}>
        <div className={styles.swipers}>
          {
            list && list[0] ? (
            <Carousel
              autoplay>
              {
                list.map(item => {
                  const data = JSON.stringify(item)
                  return(
                    <img key={item.activityId} data-item={data} onClick={(e) => this.navigatorTo(e)} className={styles.swiperImage} src={qiniu(item.imageDto)} alt='img' />
                  )
                 
                })
              }
              </Carousel>
            ) : (
              <img src={swipers} alt='img' />
            )
          }
        </div>
        {
          home && (
            <div className={styles.boxSlider}>
              <div className={styles.boxRow}>
                <div className={styles.smaller}>
                  <div className={styles.content}>
                    <div className={styles.atcTitle}>
                      {home.news}
                    </div>
                    <div className={styles.atcContent}>
                      <p>{home.newsContent1}</p>
                      <p>{home.newsContent2}</p> 
                    </div>
                    <div className={styles.appIcons}>
                      <a href="http://weibo.com/shyuzmuseum" target="_blank">
                        <img className={styles.smIocn} src={weibo} alt="yuzm-weibo" />
                      </a>
                      <a href="javascript:void(0);" className={styles.wechatRow}>
                      <img id="social-wechat" className={styles.smIocn} src={wechat} alt="yuzm-wechat" />
                      <img id="social-wechat1" className={styles.hideWechat} src={wechatcode} alt="yuzm-wechatcode" />
                      </a>
                      <a href="javascript:void(0);">
                        <img className={styles.wechatcode} src={wechat} alt="yuzm-wechat" />
                        <img className={styles.wechatcode} id="social-wechat1" src={wechatcode} alt="yuzm-wechatcode" />
                      </a>
                      <a href="http://site.douban.com/242853/" target="_blank">
                        <img className={styles.smIocn} src={douban} alt="yuzm-douban"/>
                      </a>
                      <a href="https://www.facebook.com/yuzmshanghai" target="_blank">
                        <img className={styles.smIocn} src={fb} alt="yuzm-facebook"/>
                      </a>
                      <a href="https://twitter.com/yuzmuseum" target="_blank">
                        <img className={styles.smIocn} src={twit} alt="yuzm-twit"/>
                      </a>
                      <a href="http://instagram.com/yuzmuseum" target="_blank">
                        <img className={styles.smIocn} src={ig} alt="yuzm-ig"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.larger}>
                  <div className={styles.imgContent}>
                    <div className={styles.tagTitle}>
                      <span className={styles.tagsText}>{home.space}</span>
                      <span className={styles.tags}></span>
                    </div>
                    <a className={styles.coverLink}>
                      <img src={c_1} alt="mira dancy" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.boxRow}>
                <div className={styles.larger} style={{float: 'left'}}>
                <a id="cafe"></a>
                  <div className={styles.imgContent}>
                    <div className={styles.tagTitle}>
                      <span className={styles.tagsText}>{home.cafe}</span>
                      <span className={styles.tags}></span>
                    </div>
                    <a className={styles.coverLink}>
                      <img src={c_2} alt="mira dancy" />
                    </a>
                  </div>
                </div>

                <div className={styles.smaller}  style={{float: 'right'}}>
                  <div className={styles.mailBox}>
                    <div className={styles.cells}>
                      <div className={styles.mailIcon}>
                        <img src={mail_icon} alt="img"/>
                      </div>
                      <div className={styles.mailBtn}>
                        <a href="http://www.yuzmshanghai.org/subscription-newsletter/?lang=zh-hans">{home.newsletter}</a>
                      </div>
                    </div>
                    <hr className={styles.hrLine} />
                    <div className={styles.cells}>
                      <div className={styles.mailIcon}>
                        <img src={ticket_icon} alt="img"/>
                      </div>
                      <div className={styles.mailBtn}>
                        <img src={yuz_qrcode} alt="img" />
                        <a href="http://www.yuzmshanghai.org/subscription-newsletter/?lang=zh-hans">
                          {home.ticket}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomRow}>
                <div className={styles.leftCell}>
                  <div className={styles.tagCell}>
                    <span className={styles.tagsText}>{home.event}</span>
                    <span className={styles.tags}></span>
                  </div>
                  <img src={c_3} alt="mira dancy" />
                </div>
                <Link to='/about-us' className={styles.rightCell}>
                    <div className={styles.tagCell}>
                      <span className={styles.tagsText}>{home.about}</span>
                      <span className={styles.tags}></span>
                    </div>
                  <img src={c_4} alt="mira dancy" />
                </Link>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}


export default HomePage;
