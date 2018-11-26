<template>
  <div>
    <tab v-model="linkIndex">
      <tab-item v-for="(item, index) in tabItems" @on-item-click="handler(index)" :key="index">{{item.name}}</tab-item>
    </tab>
    <!-- <swiper v-model="linkIndex" height="100px" :show-dots="false" :min-moving-distance="500">
      <swiper-item v-for="(item, index) in tabItems.length" :key="index">
        <slot :name="index" class="tab-swiper vux-center">{{index}}Conter</slot>
      </swiper-item>
    </swiper> -->
    <div v-for="(item, index) in tabItems.length" :key="index" v-show="index == linkIndex">
      <slot :name="index" class="tab-swiper vux-center">{{index}}Conter</slot>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Tab, TabItem } from 'vux';
export default {
  name: 'v-tab',
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
  methods: {
    handler(index) {
      console.log('选择了' + index);
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
