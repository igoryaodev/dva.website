import { queryTopImages } from '../services/api'
// import { notification } from 'antd'

export default {

  namespace: 'topimages',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'fetch'
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'save',
        payload: {},
      });
      const res = yield call(queryTopImages, payload)
      yield put({ 
        type: 'save',
        payload: res,
      })
      // notification.success({"message":"提交成功"})
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
  },

};
