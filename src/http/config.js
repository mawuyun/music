export const config = {
  method: 'post',
  // 基础url前缀
  baseURL: process.env.API_ROOT,
  baseURLH5: process.env.API_ROOTH5,
  baseURLPC: process.env.API_ROOTPC,
  // 请求头信息
  headers: {},
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
