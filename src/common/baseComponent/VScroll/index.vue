<template>
  <!-- scroll 的外层一定要设置 高度 -->
  <div class="scroll-wrap" :style="{height:wrapperHeight+'px'}" ref="wrapper">
    <mt-loadmore :distanceIndex=4 :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill=false ref="loadmore">
      <slot></slot>
    </mt-loadmore>
    <p v-show="noMoreData" class="noMoreData">
      ------------ 无更多数据 ------------
    </p>
  </div>
</template>

<script>
export default {
  name: 'v-scroll',
  props: {
    params: {
      type: Object,
      default: null
    },
    height: {
      type: Number,
      default: 1
    },
    showDataOver: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      allLoaded: false,
      wrapperHeight: 0,
      noMoreData: false,
      contentData: null
    };
  },
  mounted() {
    let _this = this;
    _this.wrapperHeight = _this.height !== 1 && _this.height !== 0 ? _this.height : document.documentElement.clientHeight - _this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    loadTop() {
      let _this = this;
      _this.$emit('loadTop');
      _this.falseAllLoaded();
      console.log('下拉了');
    },
    loadBottom() {
      let _this = this;
      _this.$emit('loadBottom');
      console.log('上拉了');
    },
    // 父组件可以通过 this.$refs.xxxx.topLoaded() 调用
    topLoaded() { // 停止下拉动画
      let _this = this;
      _this.$refs.loadmore.onTopLoaded();
    },
    bottomLoaded() { // 停止上拉动画
      let _this = this;
      _this.$refs.loadmore.onBottomLoaded();
    },
    trueAllLoaded() { // 禁止上拉
      let _this = this;
      _this.allLoaded = true;
      if (_this.showDataOver === true) {
        _this.noMoreData = true; // 无更多数据
      }
    },
    falseAllLoaded() { // 允许上拉
      let _this = this;
      _this.allLoaded = false;
      _this.noMoreData = false; // 更多数据
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.scroll-wrap{
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .noMoreData{
    padding: 5px 0;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
}
</style>
