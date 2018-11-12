<template>
    <transition name="silde">
      <div class="singer-detail">
      </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex';
import createSong from 'common/js/song';
export default {
  name: 'singer-detail',
  data() {
    return {
      song: []
    };
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    let _this = this;
    _this._getSingerDetailData();
  },
  methods: {
    _getSingerDetailData() {
      let _this = this;
      if (!_this.singer.id) {
        _this.$router.push('/singer');
        return;
      }
      let singerDetailParams = {
        // jsonpCallback: 'MusicJsonCallbacksinger_track__jp2',
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        singermid: _this.singer.id,
        order: 'listen',
        begin: 0,
        num: 30,
        songstatus: 1
      };
      let singerDetailOptions = {
        // prefix: 'MusicJsonCallbacksinger_track__jp2',
        name: 'MusicJsonCallbacksinger_track__jp2'
      };
      _this.$api.singerDetail(singerDetailParams, singerDetailOptions).then(res => {
        console.log(res.data.list, 'singerDetail');
        console.log(_this._getNormalSingerDetail(res.data.list), 'songDetail');
      });
    },
    _getNormalSingerDetail(list) {
      let songList = [];
      list.forEach(item => {
        songList.push(createSong(item.musicData));
      });
      return songList;
    }
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">

  .singer-detail{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: @color-background;
  }
  .silde-enter-active, .silde-leave-active{
    transition: all 0.3s;
  }
  .silde-enter, .silde-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
