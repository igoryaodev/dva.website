import React, { Component } from 'react'
import { connect } from 'dva';
import { qiniu } from '../utils/utils'

const headerImg = require('../assets/activity/yuzm-support.jpg')

@connect(({
  topimages,
}) => ({
  topimages,
}))
export default class HeadAds extends Component {

  render() {
    const { topimages, codeString } = this.props
    const topImages = function() {
      if(!codeString || !topimages || !topimages.list) return
      let item = topimages.list.filter(item => item.code === codeString)[0]
      return item && item.convertImage ? qiniu(item.convertImage) : headerImg
    }
    return (
      <div>
        <img src={topImages()} alt="img"/>
      </div>
    )
  }
}