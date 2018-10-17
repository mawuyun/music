<template>
  <div>
    <group title="禁用内置验证及显示成功或者错误样式">
      <x-input title="禁用验证" placeholder="I'm placeholder" v-model="inputValue" :is-type="checkType" text-align="right" placeholder-align="right"></x-input>
    </group>
    <v-tab :tabItems="theTab">
      <div slot="0">
        <v-scroll @loadTop="refresh" @loadBottom="upload" class="testScrollThree" ref="VScroll">
          <ul>
            <li v-for="item in allList" :key="item">{{item}}</li>
          </ul>
        </v-scroll>
      </div>
      <p slot="1">
        <ul>
          <li v-for="item in 20" :key="item">{{item}}</li>
        </ul>
      </p>
      <p slot="2">我说你这个人，怎么...怎么这么好看</p>
    </v-tab>
  </div>
</template>

<script>
import { XInput } from 'vux';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      theTab: [
        {name: '新建'},
        {name: '会议'},
        {name: '保安村'}
      ],
      allLoaded: false,
      allList: 10,
      inputValue: '',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']]
      // checkType: function(value) {
      //   return {
      //     valid: value === '2333',
      //     msg: '必须是2333'
      //   };
      // }
    };
  },
  methods: {
    refresh() {
      let _this = this;
      setTimeout(function() {
        _this.allList = 10;
        _this.$refs.VScroll.topLoaded();
      }, 500);
    },
    upload() {
      let _this = this;
      setTimeout(function() {
        _this.allList = _this.allList + 10;
        _this.$refs.VScroll.bottomLoaded();
        if (_this.allList >= 50) {
          _this.$refs.VScroll.trueAllLoaded();
        }
      }, 500);
    },
    checkType(value) {
      return {
        valid: value === '2333',
        msg: '必须是2333'
      };
    }
  },
  components: {
    XInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.testScrollTwo{
  height: 100px;
}
.list{
  display: block;
}
</style>
