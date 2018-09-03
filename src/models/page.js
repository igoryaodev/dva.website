import { queryPage, addMessage, queryPress } from '../services/api'
export default {

  namespace: 'page',

  state: {
    detail: {},
    pressList: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(queryPage, payload)
      yield put({ 
        type: 'save',
        payload: {
          detail: res && res.list[0]
        },
      });
    },
    *add({ payload }, { call, put }) {
      yield call(addMessage, payload)
    },
    *fetchPress({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(queryPress, payload)
      yield put({ 
        type: 'save',
        payload: {
          pressList: res
        },
      });
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
