import React, { Component } from 'react'
import { Input, notification, Calendar } from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Books.less'
const logo = require('../assets/logo/logo.jpg')
const leftIcon = require('../assets/global/left_white.png')
const rightIcon = require('../assets/global/right_white.png')
const calendar = require('../assets/global/calendar.png')
const bookIcon = require('../assets/global/book_white.png')
@connect(({
  language,
  books,
}) => ({
  language,
  books,
}))
export default class Books extends Component {

  state = {
    books: {
    },
    showbooks: true,
    showCalendar: false,
    left: true
  }
  componentDidMount() {
    
  }
  bindHandle(e) {
    this.state.books[e.target.name] = e.target.value
  }
  handleSubmit(){
    const { dispatch, language } = this.props
    const msg = language.books
    let { books } = this.state, 
        _books;
    if(books) {
      if(!books.inTime)
        return notification.error({
          message: '预约时间不能为空'
        })
      if(books.inTime && !books.inTime.match(/\T/)) {
        books.inTime = books.inTime + 'T00:00:00'
      }
      if(!books.name) 
        return notification.error({
          message: '姓名不能为空'
        })
      if(!books.email)
        return notification.error({
          message: '邮箱不能为空'
        })
      if(books.email && !books.email.match(/\w+@/))
        return notification.error({
          message: '邮箱格式不正确'
        })
    }
    dispatch({
      type:'books/fetch',
      payload: books
    })
    _books = document.querySelector('div[data-modal]')
    _books.dataset.books = false
    this.setState({
      showCalendar: false,
      showbooks: false,
      left: false,
      books: {}
    })
  }
  showModal(){
    const self = this
    let books = document.querySelector('div[data-modal]')
    if(books.dataset.books && books.dataset.books === 'true') return
    books.dataset.books = true
    books.addEventListener('mouseleave', () => {
      books.dataset.books= false
      self.setState({
        left: true
      })
    })
  }
  showBooks(e) {
    this.setState({
      showCalendar: false,
      showbooks: true,
      left: false
    })
    this.showModal()
  }
  showCalendar(e){
    this.setState({
      showCalendar: true,
      showbooks: false,
      left: false
    })
    this.showModal()
  }
  render() {
    const { language } = this.props
    const { books } = language
    const { showbooks, showCalendar, left } = this.state 


    return (
      <div className={styles.Books}>
      {
        books && (
          <div data-modal className={styles.rightModal}>
              <div className={styles.toolbox}>
                <div onClick={(e) => this.showBooks(e)}>
                  <img src={bookIcon} alt="icon"/>
                </div>
                <div  onClick={(e) => this.showCalendar(e)}>
                  <img src={calendar} alt="icon"/>
                </div>
                <div>
                  <img src={left ? leftIcon : rightIcon} alt="icon"/>
                </div>
              </div>
              {
                showbooks && (
                  <div className={styles.booksBox}>
                    <div className={styles.tableTitle}>{books.book}</div>
                    <table className={styles.bookTable}>
                      <tbody>
                        <tr>
                          <td>{books.name}</td>
                          <td>
                            <Input type="text" name="name" onChange={(e) => this.bindHandle(e)} autoComplete="off" />
                          </td>
                        </tr>
                        <tr>
                          <td>{books.email}</td>
                          <td><Input type="email" name="email" onChange={(e) => this.bindHandle(e)} autoComplete="off"/></td>
                        </tr>
                        <tr>
                          <td>{books.cell}</td>
                          <td><Input type="number" name="phone" onChange={(e) => this.bindHandle(e)} maxLength="11" autoComplete="off"/></td>
                        </tr>
                        <tr>
                          <td>{books.count}</td>
                          <td><Input type="number" name="peopleCount" onChange={(e) => this.bindHandle(e)} maxLength="4" autoComplete="off"/></td>
                        </tr>
                        <tr>
                          <td>{books.time}</td>
                          <td><Input type="date" name="inTime" onChange={(e) => this.bindHandle(e)} autoComplete="off"/></td>
                        </tr>
                        <tr>
                          <td>{books.tourguide}</td>
                          <td><Input type="text" name="guide" onChange={(e) => this.bindHandle(e)} autoComplete="off"/></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.tableFooter}>
                      <div className={styles.Btn} onClick={() => this.handleSubmit()}>
                        {books.submit}
                      </div>
                    </div>
                  </div>
                )
              }
              {
                showCalendar && (
                  <div className={styles.calendarBox} >
                    <Calendar fullscreen={false} />
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