import { test, queryTest, querySession } from '../services/api'

export default {

  namespace: 'test',

  state: {
    loading: true
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
      const res = yield call(test, payload)
      yield put({ 
        type: 'save',
        payload: res,
      });
    },
    *fetchTest({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'save',
        payload: {},
      });
      const res = yield call(queryTest, payload)
      yield put({ 
        type: 'save',
        payload: res,
      });
    },
    *fetchSession({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'save',
        payload: {},
      });
      const res = yield call(querySession, payload)
      yield put({ 
        type: 'save',
        payload: res,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },

};
