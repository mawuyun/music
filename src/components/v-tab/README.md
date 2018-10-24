V-tab tab插件说明

## 用处
```
用于选项卡的实现，基于xtab的封装
```

##用法

```
tab按键上 会绑定一个 tabItems的数组
例如： theTab: [
        {name: '新建'},
        {name: '会议'},
        {name: '保安村'}
      ]
name 就是 text;
tab会跟swiper一块绑定起来
点击tab 的时候 swiper 也会跟着滑动。
swiper 有一个 slot 插槽用于 插入内容。
不同的插槽会有个 name标识， 调用v-tab的时候 要指定name 与 v-tab 内的设定一致。
默认为 tabItems.length 的 index
```