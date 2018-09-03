import request from '../utils/request';


/*
*@获取展览
* ID 展览详情
* type=1 展览
* type=2 活动
* searchType=1 即将展出/展览预告
* searchType=2 过往展览 
* searchType=3 正在展出
*/
export async function queryActivity(params) {
  if(params && params.id) 
    return request(`/api/YUZMActivitys/${params.id}`, {
      method: 'GET',
    })
  else
    return request('/api/YUZMActivitys', {
      method: 'GET',
      params: params
    })
}

/*
* @参展预约
*/
export async function newBooks(params) {
  return request(`/api/YUZMBooks`, {
    method: 'POST',
    data: params
  })
}
/*
* @测试
*/
export async function test(params) {
  return request(`/test/cookie`, {
    method: 'GET',
    data: params
  })
}
export async function queryTest(params) {
  return request(`/test/get/cookie`, {
    method: 'GET',
    data: params
  })
}
export async function querySession(params) {
  return request(`/test/get/session`, {
    method: 'GET',
    data: params
  })
}

/*
* @首页轮播图
*/
export async function querySwipers(params){
  return request(`/api/YUZMIndexs`, {
    method:'GET',
    params: params
  })
}

// get page

export async function queryPage(params) {
  return request(`/api/YUZMWebInfos`, {
    method: 'GET',
    params: params
  })
}
// post message
export async function addMessage(params) {
  return request('/api/YUZMLeavingMessages', {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  })
}
// get press
export async function queryPress(params) {
  return request('/api/YUZMResources', {
    method: 'GET',
    params: params
  })
}