import {playMode} from 'common/js/config';

const state = {
  singer: {},
  playing: false, // 播放暂停
  fullScreen: false, // 显示播放界面
  playList: [], // 播放列表
  sequeneList: [], // 播放顺序
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 播放的歌曲 index
};

export default state;
