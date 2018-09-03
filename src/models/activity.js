import { queryActivity } from '../services/api'

export default {

  namespace: 'activity',

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
      const res = yield call(queryActivity, payload)
      yield put({ 
        type: 'save',
        payload: res,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return Object.assign({}, state, payload)
    },
  },

};
