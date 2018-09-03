import React, { Component } from 'react'
import { Link, routerRedux } from 'dva/router';
import styles from './GlobalHeader.less'
const upIcon = require('../assets/global/showMenubtn_up.png')
const downIcon = require('../assets/global/showMenubtn_down.png')

export default class Menu extends Component {
  state = {
    toggleIcon: upIcon
  }
  componentDidMount(){
    /*
    * 移动端menu点击事件
    */
    const menus = document.querySelectorAll('div[data-smallmenu] div[data-menu]') || []
    const childs = document.querySelectorAll('div[data-smallmenu] div[data-resizemenu] li') || []
    for(var m of menus) {
      if(m && m.tagName) {
        m.addEventListener('click', (e) => {
         e.preventDefault()
          for(var other of menus) {
            if(other && other.tagName)
              other.parentElement.dataset.role = false
          }
          e.target.parentElement.dataset.role = true
        })
      }
    }
    for(var c of childs) {
      if(c && c.tagName) {
        c.addEventListener('click', (e) => {
          document.querySelector('div[data-smallmenu] div[data-resizemenu]').dataset.show = false
        })
      }
    }
  }

  menuSet(e) {
    const first = e.target.parentElement.firstElementChild
    if(!first.dataset.show || first.dataset.show === 'false'){
      first.dataset.show = true
      this.setState({
        toggleIcon: upIcon,
      })
    }
    else{
      first.dataset.show = false
      this.setState({
        toggleIcon: downIcon,
      })
    }
  }
 
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
    const { header } =this.props
    const { toggleIcon } = this.state
    return (
      <div className={styles.menuBox}>
        {
          header && (
            <div data-resizemenu className={styles.menu}>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.visit}</div>
                <ul className={styles.subMenuRow}>
                  <li>
                    <Link to="/visit">{header.guide}</Link>
                  </li>
                  <li onClick={() => this.scrollToAnchor('cafe')}>
                    {header.cafe}
                  </li>
                  <li onClick={() => this.scrollToAnchor('cafe')}>
                    {header.store}
                  </li>
                </ul>
              </div>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.exhibitions}</div>
                <ul className={styles.subMenuRow}>
                  <li onClick={() => this.navigateTo({searchType:3,type:1})}>
                   {header.current}
                  </li>
                  <li onClick={() => this.navigateTo({searchType:1,type:1})}>
                    {header.upcoming}
                  </li>
                  <li onClick={() => this.navigateTo({searchType:2,type:1})}>
                    {header.past}
                  </li>
                </ul>
              </div>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.events}</div>
                <ul className={styles.subMenuRow}>
                  <li>
                    {header.whatson}
                  </li>
                  <li onClick={() => this.navigateTo({type:2})}>
                    {header.artevents}
                  </li>
                  <li onClick={() => this.navigateTo({type:3})}>
                    {header.educational}
                  </li>
                  <li>
                    <Link to='/activityVenue'>{header.artvenue}</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.support}</div>
                <ul className={styles.subMenuRow}>
                  <li>
                    <Link to="/sponsor">{header.sponsorship}</Link>
                  </li>
                  <li>
                    <a>{header.membership}</a>
                  </li>
                </ul>
              </div>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.joinus}</div>
                <ul className={styles.subMenuRow}>
                  <li>
                    <a>{header.careers}</a>
                  </li>
                  <li>
                    <Link to="/intern">{header.internship}</Link>
                  </li>
                  <li>
                    <Link to="/volunteer">{header.volunteering}</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.subMenu}>
                <div data-menu className={styles.mainMenuItem}>{header.aboutus}</div>
                <ul className={styles.subMenuRow}>
                  <li>
                    <Link to="/about-us">{header.yuzmuseum}</Link>
                  </li>
                  <li>
                    <Link to="/news-list">{header.press}</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">{header.contactus}</Link>
                  </li>
                </ul>
              </div>
            </div>
          )
        }
        <div data-menuset onClick={(e) => this.menuSet(e)} className={styles.menuSet}>
          <img src={toggleIcon} alt="img" style={{ height: '25px', width: 'auto'}}/>
          {header && header.menu}
        </div>
      </div>
    )
  }
}