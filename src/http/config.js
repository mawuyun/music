export default {
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
