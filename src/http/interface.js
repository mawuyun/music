import axios from './api'; // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独倒出
export const appAccessToken = params => {
  return axios({
    url: '/epc/noLogin/appAccessToken',
    method: 'get',
    params
  });
};

export let request = (port, params) => { // 免登
  return axios({
    url: '/services/DLMAppService/requestHandling',
    method: 'post',
    data: {
      appRequestVO: {
        requestCode: port,
        requestParams: params
      }
    }
  });
};

// 单独倒出
export const requestPost = data => {
  return axios({
    url: '/services/DLMAppService/requestHandling',
    method: 'post',
    data
  });
};

// 默认全部倒出
// 根绝需要进行
export default {
  request,
  appAccessToken,
  requestPost
};
