import { queryActivity } from '../services/api'

export default {

  namespace: 'activity',

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
      const res = yield call(queryActivity, payload)
      yield put({ 
        type: 'save',
        payload: res,
      });
    },
    *clear({ payload }, { call, put }) {
      yield put({
        type: 'clearstate',
        payload: ''
      })
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    clearstate({ payload }) {
      return {
        ...payload
      }
    }
  },

};
