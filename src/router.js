import React, { Component } from 'react';
import { routerRedux, Switch } from 'dva/router';
import { LocaleProvider } from 'antd'
import BasicLayout from './layouts/BasicLayout'
const { ConnectedRouter } = routerRedux;


function RouterConfig({ history }) {
  return (
    <LocaleProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <BasicLayout />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
