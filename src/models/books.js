import { newBooks } from '../services/api'
import { notification } from 'antd'

export default {

  namespace: 'books',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'save',
        payload: {},
      });
      const res = yield call(newBooks, payload)
      if(res.status === 200)
        notification.success({"message":"提交成功"})
    },
  },

  reducers: {
    save(state, { payload }) {
      return {}
    },
  },

};
