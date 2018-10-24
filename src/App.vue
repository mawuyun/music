<template>
  <div id="app">
    <m-header></m-header>
    <r-tab :tabItems="tabItems"></r-tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header';
export default {
  name: 'App',
  data() {
    return {
      tabItems: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/rank'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    };
  },
  components: {
    MHeader
  }
};
</script>

<style lang="less">
</style>
