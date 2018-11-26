<template>
  <div id="app">
    <keep-alive>
      <router-view class="vueRouter"/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  }
};
</script>

<style lang="less">
</style>
