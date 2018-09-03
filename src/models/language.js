import zh_CN from '../locales/zh_CN'
import en_US from '../locales/en_US'

export default {

  namespace: 'language',

  state: {},
    subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'fetch'
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let lang = window.localStorage['lang']
      if(!lang || lang === 'zh-CN') {
        yield put({
          type:'save',
          payload: zh_CN,
        })
      } else{
        yield put({
          type:'save',
          payload: en_US,
        })
      }
      
    },
  },

  reducers: {
    save(state, { payload }) {
      return Object.assign({},state, payload)
    },
  },

};
