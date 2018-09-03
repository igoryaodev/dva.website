import { newBooks } from '../services/api'

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
