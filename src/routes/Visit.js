import React, { Component } from 'react';
import { connect } from 'dva';
import { Carousel, Input } from 'antd'
// import { Carousel } from 'antd-mobile'
import { changeTitle } from '../utils/utils'
import styles from './HomePage.less';
import vStyles from './Visit.less';

const v_1 = require('../assets/visit/1.jpg')
const v_2 = require('../assets/visit/2.jpg')
const v_3 = require('../assets/visit/3.jpg')
const v_4 = require('../assets/visit/4.jpg')
const subway_icon = require('../assets/visit/subway.png')
const bus_icon = require('../assets/visit/bus_icon.png')
@connect(({
  language,
  homepage,
}) => ({
  language,
  homepage,
}))
class Visit extends Component {
  state = {
    
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'language/fetch'
    })
  }
  visitImageLoad(e){
    this.setState({
      visitHeight: e.target.height + 'px'
    })
    console.log(e.target.height)
  }

  render() {
    const { language } = this.props
    const { home, visit, header } = language
    const { visitHeight } = this.state
    changeTitle(header.visit)

    return (
      <div className={vStyles.visit}>
        <div className={styles.HomePage}>
          {
            home && visit && (
              <div className={styles.boxSlider} style={{fontWeight: 'bold'}}>

                <div className={styles.boxRow}>
                  <div className={styles.smaller} style={{width: '49.7%'}}>
                    <div className={styles.imgContent}>
                      <div className={vStyles.tagMiddle}>
                        <div className={vStyles.middleBox}>
                          <p className={`${vStyles.middleTitle} ${vStyles.fontNormal}`}>{visit.hours}</p>
                          <p className={vStyles.fontNormal}>{visit.hours1}</p>
                          <p className={vStyles.fontNormal}>{visit.hours2}</p>
                        </div>
                      </div>
                      <a className={styles.coverLink}>
                        <img src={v_1} alt="mira dancy" />
                      </a>
                    </div>
                  </div>
                  <div className={styles.smaller} style={{width: '49.7%',background: '#E7E7E8'}}>
                   <div className={vStyles.tableContent}>

                       <div>
                          <table className={vStyles.tables}>
                            <thead>
                              <tr>
                                <th>{visit.admission}</th>
                                <th>{visit.price}</th>
                                <th>{visit.remark}</th>
                                <th>{visit.free}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><b>{visit.exhibition}</b></td>
                                <td>{visit.exhibitionPrice}</td>
                                <td rowSpan={2}>{visit.remark1}</td>
                                <td rowSpan={2}>{visit.free1}</td>
                              </tr>
                              <tr>
                                <td><b>{visit.exhibitionHalf}</b></td>
                                <td>
                                  <div>{visit.exhibitionHalfPrice}</div>
                                  <div>{visit.exhibitionHalf1}</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className={vStyles.tableAddres}>{visit.openTime}</div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className={styles.boxRow}>
                  <div className={styles.smaller} style={{background:'#666',justifyContent:'flex-start'}}>
                    
                    <div className={vStyles.artContent}>
                      <div className={vStyles.atcTitle}>
                        {visit.location}
                      </div>
                      <div className={vStyles.atcContent}>
                        <p>{visit.case1}</p>
                      </div>
                      <div className={vStyles.atcTitle} style={{fontWeight:'200'}}>
                        <img className={vStyles.smIcon} src={subway_icon} alt="icon" />{visit.subway}
                      </div>
                      <div className={vStyles.atcContent}>
                        <p>{visit.subway1}</p>
                        {
                          visit.subway2 && (
                            <p>{visit.subway2}</p>
                          )
                        }
                      </div>
                      <div className={vStyles.atcTitle} style={{fontWeight:'200'}}>
                        <img className={vStyles.smIcon} src={bus_icon} alt="icon" />{visit.bus}
                      </div>
                      <div className={vStyles.atcContent}>
                        <p>{visit.bus1}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.larger}>
                   <div className={styles.imgContent}>
                      <a className={styles.coverLink}>
                        <img src={v_2} alt="mira dancy" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.boxRow}>
                  <div className={styles.smaller}  style={{width: '49.7%'}}>
                    <div className={styles.imgContent}>
                      <div className={styles.tagTitle}>
                        <span className={styles.tagsText}>{visit.cafe}</span>
                        <span className={styles.tags}></span>
                      </div>
                      <a id="cafe" className={styles.coverLink}>
                        <img src={v_3} alt="mira dancy" />
                      </a>
                    </div>
                  </div>
                  <div className={styles.larger} style={{width: '49.7%'}}>
                   <div className={styles.imgContent}>
                      <div className={styles.tagTitle}>
                        <span className={styles.tagsText}>{visit.store}</span>
                        <span className={styles.tags}></span>
                      </div>
                      <a className={styles.coverLink}>
                        <img src={v_4} alt="mira dancy" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )
          }
        </div>
      </div>
    )
  }
}


export default Visit;
