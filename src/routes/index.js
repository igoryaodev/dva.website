import React from 'react'
import HomePage from './HomePage'
import Activity from './Activity'
import ActivityVenue from './ActivityVenue'
import ActivityDetail from './ActivityDetail'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import NewsList from './NewsList'
import Intern from './Intern'
import Sponsor from './Sponsor'
import Volunteer from './Volunteer'
import Search from './Search'
import test from './test'
import Visit from './Visit'

const routes = [
  {
    name: 'HomePage',
    path: '/home',
    component: HomePage
  },
  {
    name: 'Activity',
    path: '/activity',
    component: Activity
  },
  {
    name: 'ActivityVenue',
    path: '/activityVenue',
    component: ActivityVenue
  },
  {
    name: 'ActivityDetail',
    path: '/activityDetail/:id',
    component: ActivityDetail
  },
  {
    name: 'ContactUs',
    path: '/contact-us',
    component: ContactUs
  },
  {
    name: 'AboutUs',
    path: '/about-us',
    component: AboutUs
  },
  {
    name: 'NewsList',
    path: '/news-list',
    component: NewsList
  },
  {
    name: 'Intern',
    path: '/intern',
    component: Intern
  },
  {
    name: 'Sponsor',
    path: '/sponsor',
    component: Sponsor
  },
  {
    name: 'Volunteer',
    path: '/volunteer',
    component: Volunteer
  },
  {
    name: 'Search',
    path: '/search',
    component: Search
  },
  {
    name: 'test',
    path: '/test',
    component: test
  },
  {
    name: 'Visit',
    path: '/visit',
    component: Visit
  },
]

export default routes 