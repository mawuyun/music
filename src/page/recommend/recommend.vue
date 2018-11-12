<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-content">
      <v-scroll @loadTop="refresh" @loadBottom="loadMore" ref="vscroll">
        <swiper :list="bannerdata" auto loop height="150px" dots-position="center" ></swiper>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="(item, index) in discList" class="item" :key="index">
                <div class="icon">
                  <!-- <img width="60" height="60"  v-lazy="item.cover_url_small"> -->
                  <x-img :src="item.cover_url_small" container=".scroll-wrap"></x-img>
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.title"></h2>
                  <p class="desc" v-html="item.creator_info.nick" ></p>
                </div>
              </li>
            </ul>
          </div>
      </v-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Swiper } from 'vux';
// import {playlist} from '../../../static/data';
export default {
  name: 'recommend',
  data() {
    return {
      bannerdata: [],
      discList: [],
      discListCurPage: 1,
      discListSize: 40 // 推荐每页的数据条数
    };
  },
  created() {
    let _this = this;
    _this._getInitData();
  },
  methods: {
    _getInitData() { // 获得基础数据
      let _this = this;
      _this.getBannerdata();
      _this.songList();
    },
    getBannerdata() { // 获得轮播图的数据
      let _this = this;
      let bannerParams = {
        uin: 0,
        platform: 'h5',
        needNewCode: 1
      };
      _this.$api.jsonpRequest(bannerParams).then(res => {
        let newBannerdata = [];
        res.data.slider.forEach(element => {
          let item = [];
          item.url = element.linkUrl;
          item.img = element.picUrl;
          newBannerdata.push(item);
        });
        _this.bannerdata = newBannerdata;
        console.log(res, 'bannerData');
      });
    },
    songList() { // 歌曲列表
      let _this = this;
      let singeListParams = {
        callback: 'recom1860202536752984',
        g_tk: 5381,
        jsonpCallback: 'recom1860202536752984',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf - 8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: JSON.stringify({
          'comm': {
            'ct': 24
          },
          'playlist': {
            'method': 'get_playlist_by_category',
            'param': {
              'id': 8,
              'curPage': _this.discListCurPage,
              'size': _this.discListSize,
              'order': 5,
              'titleid': 8
            },
            'module': 'playlist.PlayListPlazaServer'
          }
        })
      };
      let options = {
        prefix: 'getUCGI3080886106620784',
        name: 'recom1860202536752984'
      };
      _this.$api.singerList(singeListParams, options).then(res => {
        _this.$refs.vscroll.topLoaded(); // 下拉刷新结束
        _this.$refs.vscroll.bottomLoaded(); // 上拉加载结束
        _this.discList = _this.discList.concat(res.playlist.data.v_playlist);
        if (_this.discListCurPage * _this.discListSize >= 40) {
          _this.$refs.vscroll.trueAllLoaded();
        }
        console.log(res, 'singeList');
      });
    },
    refresh() { // 下拉刷新
      let _this = this;
      _this.discListCurPage = 1;
      _this.discList = [];
      _this._getInitData();
    },
    loadMore() { // 上拉加载
      let _this = this;
      _this.discListCurPage += 1;
      _this._getInitData();
    }
  },
  components: {
    Swiper
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
