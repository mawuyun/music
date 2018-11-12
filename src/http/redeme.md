### jsonp的请求 可以配置:

处理jsonp响应的全局回调函数的前缀(字符串)前缀(默认为__jp) prefix
处理jsonp响应的全局回调函数的名称(字符串) name

### 例子： 
```
let singerListParams = {
        callback: 'getUCGI3080886106620784',
        g_tk: 5381,
        jsonpCallback: 'getUCGI3080886106620784',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: JSON.stringify({'comm': {'ct': 24, 'cv': 10000}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': -100, 'sin': 0, 'cur_page': 1}}})
      };
let options = {
        prefix: 'getUCGI30808861066207841',
        name: 'getUCGI3080886106620784'
      };
```
```
 _this.$api.singerList(singerListParams, options).then(res => {
        console.log(res, 'singerList');
      });
```