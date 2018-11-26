###方法
```
无需引入
在组件里直接引用 v-scroll

无需设置外部div高度，自动识别外部div到页面页面可视区域底部的距离
```

###引入其他组件
```
若在组件里用 XImg 组件
在标签 x-img 加入属性及属性值 container=".scroll-wrap"
```

###方法

```
@loadTop="yourFounctionName" // 下拉时候触发的事件

@loadBottom="yourFounctionName" // 上拉时候触发的事件

_this.$refs.VScroll.topLoaded();// 下拉刷新结束

_this.$refs.VScroll.bottomLoaded();// 上拉加载结束

_this.$refs.VScroll.trueAllLoaded();// 禁止上拉

注： VScroll 是 ref 自定义的
```

###配置
```
height  如果传入height有值 并且不为0 则滚动外层高度为height  不传为自动识别高度

showDataOver  在没有更多数据时  是否在底部显示提示
```