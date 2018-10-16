import axios from 'axios'; // 注意先安装哦
import config from './config.js'; // 倒入默认配置
// import qs from 'qs'; // 序列化请求数据，视服务端的要求
// import store from '../store.js';
import md5 from 'md5';
import {
  // Toast,
  Indicator,
  MessageBox
} from 'mint-ui';
import 'mint-ui/lib/style.css';

function getTime() {
  function pad2(n) {
    return n < 10 ? '0' + n : n;
  }
  function getRestTime() {
    let date = new Date();
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
  }
  return getRestTime;
}
let Time = getTime();
// 生成signature
function signature(Content, Time) {
  return `DLMAppServicerequestHandling${Content}appKey=DLM_SCW_APP_REQUEST_HANDLINGformat=jsontimestamp=${Time}signatureMethod=md5version=1RfXOjO07`;
}

export default function $axios(options) {
  const StrMd5 = md5(signature(options, Time));
  let theHeaders = config.headers;
  theHeaders.signature = StrMd5.toLocaleUpperCase();
  theHeaders.timestamp = Time();
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: theHeaders,
      transformResponse: [function(data) {}]
    });

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // Tip: 1
        // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画
        // var _this = this;
        // store.commit('SET_LOADING', true);
        Indicator.open();
        // Tip: 2
        // 带上 token , 可以结合 vuex 或者重 localStorage
        // if (store.getters.token) {
        //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // } else {
        //     // 重定向到登录页面
        // }
        // Tip: 3
        // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        // if (
        //   config.method.toLocaleLowerCase() === 'post' ||
        //   config.method.toLocaleLowerCase() === 'put' ||
        //   config.method.toLocaleLowerCase() === 'delete'
        // ) {
        //   config.data = qs.stringify(config.data);
        // }
        return config;
      },
      error => {
        // 请求错误时做些事(接口错误、超时等)
        // Tip: 4
        // 关闭loadding
        console.log('request:', error);
        // store.commit('SET_LOADING', false);
        Indicator.close();
        //  1.判断请求超时
        if (
          error.code === 'ECONNABORTED' &&
          error.message.indexOf('timeout') !== -1
        ) {
          console.log(
            '根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案'
          );
          // return service.request(originalRequest);//例如再重复请求一次
        }
        //  2.需要重定向到错误页面
        const errorInfo = error.response;
        console.log(errorInfo, 'errorInfo');
        // if (errorInfo) {
        // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        // const errorStatus = errorInfo.status; // 404 403 500 ... 等
        // router.push({
        //   path: `/error/${errorStatus}`
        // });
        // }
        return Promise.reject(error); // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    );

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        // store.commit('SET_LOADING', false);
        Indicator.close();
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          data = typeof (response.request.responseText) === 'string' ? JSON.parse(response.request.responseText) : response.request.responseText;
        } else {
          data = typeof (response.data) === 'string' ? JSON.parse(response.data) : response.data;
        }
        // 根据返回的errorCode值来做不同的处理（和后端约定）
        // switch (data.errorCode) {
        //   case 18005000:{
        //     MessageBox('18005000', data.errorMessage)
        //     break;
        //   }
        //   default:
        // }
        if (data.errorCode) {
          MessageBox('服务错误', data.errorMessage);
        }
        // 若不是正确的返回code，且已经登录，就抛出错误
        // const err = new Error(data.description)

        // err.data = data
        // err.response = response

        // throw err
        let result = JSON.parse(data.result.replace(/\\/g, ''));
        if (result.result === 0) {
          MessageBox('提示', result.msg);
        }
        return result;
        // return response;
      },
      err => {
        Indicator.close();
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误';
              break;

            case 401:
              err.message = '未授权，请登录';
              break;

            case 403:
              err.message = '拒绝访问';
              break;

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              break;

            case 408:
              err.message = '请求超时';
              break;

            case 500:
              err.message = '服务器内部错误';
              break;

            case 501:
              err.message = '服务未实现';
              break;

            case 502:
              err.message = '网关错误';
              break;

            case 503:
              err.message = '服务不可用';
              break;

            case 504:
              err.message = '网关超时';
              break;

            case 505:
              err.message = 'HTTP版本不受支持';
              break;

            default:
          }
        }
        console.error(err);
        // 此处我使用的是 element UI 的提示组件
        // Message.error(`ERROR: ${err}`);
        // store.commit('showDialog', {show: true, message: err.message});
        MessageBox('错误', err.message);
        return Promise.reject(err); // 返回接口返回的错误信息
      }
    );

    // 请求处理
    instance(options)
      .then(res => {
        resolve(res);
        return false;
      })
      .catch(error => {
        reject(error);
      });
  });
}
