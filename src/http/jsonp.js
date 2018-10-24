import initJsonp from 'jsonp';
import {config, commonParams, ERR_OK, options} from './config.js'; // 倒入默认配置
import {
  Indicator,
  MessageBox
} from 'mint-ui';
import 'mint-ui/lib/style.css';

export default function jsonp(url, params, paramsOptions) {
  Indicator.open(); // 开始请求动画
  return new Promise((resolve, reject) => {
    const finalParams = Object.assign({}, params, commonParams);
    url = config.baseURL + url + (url.indexOf('?') < 0 ? '?' : '&') + handleParams(finalParams);
    let finalOptions = Object.assign({}, options, paramsOptions); // 合并options
    initJsonp(url, finalOptions, (err, data) => {
      if (!err) {
        Indicator.close(); // 停止请求动画
        if (data.code === ERR_OK) { // 判断是否code为0
          resolve(data.data);
        } else {
          MessageBox('请求出错');
        }
      } else {
        MessageBox(err.message);
        reject(err);
      }
    });
  });
}

function handleParams(params) { // 将请求参数拼接到url里面
  let url = '';
  for (let k in params) {
    let value = params[k] === undefined ? '' : params[k];
    url += `&${k}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : '';
}
