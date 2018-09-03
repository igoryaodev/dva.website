import React, { Component } from 'react'
import { connect } from 'dva'
import { Router, Redirect, Route, Switch } from 'dva/router';
import NotFound from '../components/NotFound'
import HomePage from '../routes/HomePage'
import GlobalHeader from '../components/GlobalHeader'
import GlobalFooter from '../components/GlobalFooter'
import ContentFooter from '../components/ContentFooter'
import Books from '../components/Books'
import routes from '../routes/index'
import styles from './BasicLayout.less'

export default class BasicLayout extends Component {
  componentDidMount() {
    // document.getElementById('title').innerHTML = 'yuzm'
  }

  render() {
    const { history, message, lang, changeLang } = this.props
    return (
      <div className={styles.basic}>
        <div>
          <GlobalHeader />
        </div>
        <div>
          <div className={styles.content}>
            <Switch>
              {
                routes && routes[0] && routes.map((item, index) => (
                  <Route key={index} {...item} />
                ))
              }
              <Redirect exact from="/" to='/home'/>
              <Route to='/404' component={NotFound} />
            </Switch>
          </div>
          <Books />
          <ContentFooter />
        </div>
        <div>
          <GlobalFooter />
        </div>
      </div>
    )
  }
}