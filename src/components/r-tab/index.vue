<template>
  <div class="tab">
    <!-- <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link> -->
    <tab v-model="linkIndex">
      <tab-item v-for="(item, index) in tabItems" @on-item-click="handler(item)" :key="index">{{item.name}}</tab-item>
    </tab>
  </div>
</template>

<script type="text/ecmascript-6">
import { Tab, TabItem } from 'vux';
export default {
  name: 'r-tab',
  props: {
    tabItems: {
      type: Array
    }
  },
  data() {
    return {
      linkIndex: 0
    };
  },
  created() {
    let _this = this;
    console.log(_this.tabItems[0]);
    _this.handler(_this.tabItems[0]);
  },
  methods: {
    handler(item) {
      let _this = this;
      _this.$router.push(item.path);
    }
  },
  components: {
    Tab,
    TabItem
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

</style>
