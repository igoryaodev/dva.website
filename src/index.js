import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';
import createHistory from 'history/createHashHistory';
import models from './models/index'

import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
for(var m of models){
  app.model(m.default)
}

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
