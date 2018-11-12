<template>
  <div class="singer" ref="singer">
    <mt-index-list :height="listClientHeight">
      <mt-index-section :index="element.tag" v-for="(element, index) in singerList" :key="index">
        <div v-for="(singer, index) in element.items" :key="index" class="singerInfo" @click="getDetail(singer)">
          <img :src="singer.avatar" class="avatar" alt="">
          <p class="name">{{singer.name}}</p>
        </div>
      </mt-index-section>
    </mt-index-list>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Singer from 'common/js/singer';
import { IndexList, IndexSection } from 'mint-ui';
import {mapMutations} from 'vuex';
const HOTTAG = '热门';
const HOTLENGTH = 10;
export default {
  name: 'singer',
  data() {
    return {
      singerList: [],
      listClientHeight: 1
    };
  },
  created() {
    let _this = this;
    _this.getData();
  },
  mounted() {
    let _this = this;
    // _this.listClientHeight = _this.$refs.singer.offsetHeight;
    _this.listClientHeight = document.documentElement.clientHeight - _this.$refs.singer.getBoundingClientRect().top;
    console.log(_this.listClientHeight, '高度');
  },
  methods: {
    getData() {
      let _this = this;
      _this.getSinerList();
    },
    getSinerList() {
      let _this = this;
      // let singerListParams = {
      //   callback: 'getUCGI3080886106620784',
      //   g_tk: 5381,
      //   jsonpCallback: 'getUCGI3080886106620784',
      //   loginUin: 0,
      //   hostUin: 0,
      //   format: 'jsonp',
      //   inCharset: 'utf8',
      //   outCharset: 'utf-8',
      //   notice: 0,
      //   platform: 'yqq',
      //   needNewCode: 0,
      //   data: JSON.stringify({'comm': {'ct': 24, 'cv': 10000}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': -100, 'sin': 0, 'cur_page': 1}}})
      // };

      // let options = {
      //   prefix: 'getUCGI30808861066207841',
      //   name: 'getUCGI3080886106620784'
      // };
      // _this.$api.singerList(singerListParams, options).then(res => {
      //   console.log(res, 'singerList');
      // });

      let singerListOldParams = {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNeCode: 0,
        platform: 'yqq',
        g_tk: 1664029744
      };

      _this.$api.singerListOld(singerListOldParams).then(res => {
        _this.singerList = _this._getNormalSingerList(res.data.list);
        console.log(_this._getNormalSingerList(res.data.list), 'singerList');
      });
    },
    _getNormalSingerList(list) {
      let map = {
        hot: {
          tag: HOTTAG,
          items: []
        }
      };

      list.forEach((item, index) => {
        if (index < HOTLENGTH) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }));
        }

        const key = item.Findex;

        if (!map[key]) {
          map[key] = {
            tag: key,
            items: []
          };
        }

        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }));
      });

      let hot = [];
      let ret = [];

      for (let key in map) {
        let val = map[key];
        if (key.tag === HOTTAG) {
          hot.push(val);
        } else if (key.match(/[a-zA-Z]/)) {
          ret.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.tag.charCodeAt(0) - b.tag.charCodeAt(0);
      });

      return hot.concat(ret);
    },
    getDetail(singer) {
      let _this = this;
      _this.$router.push({
        path: `/singer/${singer.id}`
      });
      _this.setSinger(singer);
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    IndexList,
    IndexSection
  }
};

</script>

<style scoped lang="less" rel="stylesheet/less">
  .singer{
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    .singerInfo{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0 10px 30px;
      .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name{
        margin-left: 20px;
        color: @color-text-l;
        font-size: @font-size-medium;
      }
    }
  }

</style>
