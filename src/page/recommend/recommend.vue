<template>
  <div class="recommend" ref="recommend">
    推荐
    <!-- <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item, index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="(item, index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'recommend',
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
      let _this = this;
      let bannerParams = {
        // g_tk: '5381',
        uin: 0,
        // format: 'json',
        // inCharset: 'utf-8',
        // outCharset: 'utf-8',
        // notice: 0,
        platform: 'h5',
        needNewCode: 1
      };
      _this.$api.jsonpRequest(bannerParams).then(res => {
        console.log(res, 'bannerData');
      });
    }
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  .recommend{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        .slider-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .recommend-list{
        .list-title{
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: @font-size-medium;
          color: @color-theme;
        }
        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon{
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: @font-size-medium;
            .name{
              margin-bottom: 10px;
              color: @color-text;
            }
            .desc{
              color: @color-text-d;
            }
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
