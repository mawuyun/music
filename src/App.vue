<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <div class="testScroll">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill=false ref="loadmore">
        <ul>
          <li v-for="item in 50" :key="item">{{ item }}</li>
        </ul>
      </mt-loadmore>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        click: true,
        listenBeforeScroll: true // 用于input blur
      },
      pullUpLoad: true,
      allLoaded: false
    };
  },
  methods: {
    loadTop() {
      let _this = this;
      setTimeout(function(params) {
        _this.$refs.loadmore.onTopLoaded();
        console.log('下拉了');
      }, 500);
    },
    loadBottom() {
      let _this = this;
      setTimeout(function(params) {
        _this.$refs.loadmore.onBottomLoaded();
        console.log('下拉了');
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
.testScroll{
  height: 200px;
  overflow: scroll;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
