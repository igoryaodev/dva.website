import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { changeTitle } from '../utils/utils'
import styles from './AboutUs.less';

class AboutUs extends Component {
  state = {
    height1: 408,
    height2: 408,
    height3: 408,
    height4: 408
  }
  componentDidMount() {

  }
  onImage1Load(e) {
    this.setState({
      height1: e.target.height
    })
  }
  onImage2Load(e) {
    this.setState({
      height2: e.target.height
    })
  }
  onImage3Load(e) {
    this.setState({
      height3: e.target.height
    })
  }
  onImage4Load(e) {
    this.setState({
      height4: e.target.height
    })
  }
  render() {
    const { height1, height2, height3, height4 } = this.state;
    const { language: { about, header } } = this.props
    changeTitle(header.yuzmuseum)

    return (
      <div className={styles.aboutUs}>
        <Row gutter={16}>
          <Col md={8} xs={24}>
            <div className={styles.videoWrap}>
              <video controls preload="auto" 
              src="http://7xkcpc.com2.z0.glb.qiniucdn.com/pgc/richtext/24399872514445e4a2c0e04b6dfafafe.mp4#null|null" 
              poster="http://7xkcpc.com2.z0.glb.qiniucdn.com/pgc/richtext/1bfc2c1359814abfa1d16fab0b73a143.jpg#629|433"></video>
            </div>
          </Col>
          <Col md={16} xs={24}>
            <div className={styles.aboutArt}>
              <div className={styles.artContent}>
                <h3>{about.h1}</h3>
                <p>{about.p1}<br />{about.p2}</p>
                <p>{about.p3}</p>
                <p>{about.p4}</p>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{marginTop: 12}}>
          <Row gutter={16}>
            <Col md={16} xs={24}>
            <div className={`${styles.aboutArt} ${styles.aboutFounder}`} style={{height: height1}}>
              <div className={`${styles.artContent} ${styles.founderContent}`}>
                <h3>{about.h2}</h3>
                <p>{about.p5}<br />{about.p6}
                <br />{about.p7}</p>
                <p>{about.p8}</p>
              </div>
            </div>
            </Col>
            <Col md={8} xs={24}>
              <div className={styles.founderImg}>
                <img onLoad={(e) => this.onImage1Load(e)} src={require('../assets/ABOUT-THE-YUZ2.jpg')} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{marginTop: 12}}>
          <Row gutter={16}>
            <Col md={8} xs={24}>
              <div className={styles.founderImg}>
                <img onLoad={(e) => this.onImage2Load(e)} src={require('../assets/ABOUT-THE-CURATOR.jpg')} alt="" />
              </div>
            </Col>
            <Col md={16} xs={24}>
              <div className={styles.aboutArt} style={{height: height2}}>
                <div className={styles.artContent}>
                  <h3>{about.h3}</h3>
                  <p>{about.p9}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{marginTop: 12}}>
          <Row gutter={16}>
            <Col md={16} xs={24}>
              <div className={styles.founderImg}>
                <img onLoad={(e) => this.onImage3Load(e)} src={require('../assets/about.jpg')} alt="" />
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div className={`${styles.aboutArt} ${styles.aboutFounder}`} style={{height: height3}}>
                <div className={`${styles.artContent} ${styles.founderContent}`}>
                  <h3>{about.h4}</h3>
                  <p>
                    <strong>{about.p10}</strong><br />{about.p11}
                  </p>
                  <p>
                    <strong>{about.p12}</strong><br />{about.p13}
                  </p>
                  <p>
                    <strong>{about.p14}</strong><br />{about.p15}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{marginTop: 12}}>
        <Row gutter={16}>
            <Col md={8} xs={24}>
            <div className={styles.aboutArt} style={{height: height4}}>
              <div className={styles.artContent}>
                <p>{about.p16}</p>
                <p>{about.p17}</p>
              </div>
            </div>
            </Col>
            <Col md={16} xs={24}>
              <div className={styles.founderImg}>
                <img onLoad={(e) => this.onImage4Load(e)} src={require('../assets/about2.jpg')} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default connect(({language}) => ({
  language
}))(AboutUs);