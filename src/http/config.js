export const config = {
  method: 'post',
  // 基础url前缀
  baseURL: process.env.API_ROOT,
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json;charset=UTF-8',
    // 'Content-Length': ContentLength,
    appKey: 'key1',
    timestamp: '',
    version: '1',
    format: 'json',
    signatureMethod: 'md5',
    Signature: ''
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
};

export const commonParams = {
  g_tk: 5381,
  inChatset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
};

export const options = {
  param: 'jsonpCallback'
};

export const ERR_OK = 0;
