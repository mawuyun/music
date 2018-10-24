<template>
  <div class="rank" ref="rank">
    排行
    <!-- <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="(item, index) in topList" :key="index">
          <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl"/>
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.songList" :key="index">
              <span>{{index + 1}}</span>
              <span>{{song.songname}}-{{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'rank',
  created() {
    let _this = this;
    _this._getInitData();
  },
  methods: {
    _getInitData() { // 获得基础数据
      let _this = this;
      _this.getBannerdata();
    },
    getBannerdata() { // 获得轮播图的数据

    }
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";
  @import "~common/less/mixin";

  .rank{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .toplist{
      height: 100%;
      overflow: hidden;
      .item{
        display: flex;
        margin: 0 20px;
        padding-top: 20px;
        height: 100px;
        &:last-child{
          padding-bottom: 20px
        }
        .icon{
          flex: 0 0 100px;
          width: 100px;
          height: 100px;
        }
        .songlist{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          height: 100px;
          overflow: hidden;
          background: @color-highlight-background;
          color: @color-text-d;
          font-size: @font-size-small;
          .song{
            .no-wrap();
            line-height: 26px;
          }
        }
      }
      .loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
