<template>
  <section id="Personal">
    <ul>
      <li>
        <div>
          <img :src='islogin ? url[0] : url[1]' >
          <span>{{islogin ? userName : '你未登陆'}}</span><button @click="del">退出登录</button>
        </div>
      </li>
      <li class="collect">我的收藏<button @click="go('want')">想看{{wantCount}}</button><button @click="go('watched')">看过{{watchCount}}</button></li>
      <li>我的发布</li>
      <li>我的日记</li>
      <li>我的关注</li>
      <li>我的相册</li>
      <li>豆列</li>
      <aaa now='1'></aaa>
    </ul>
  </section>
</template>

<script>
import oneP from '@/assets/mylover.jpg'
import twoP from '@/assets/icon/login.png'

import aaa from '@/comptpublic/Footer'
import Cookie from 'js-cookie'
export default {
  name: 'personal',
  // 注册组件
  components: {
    aaa
  },
  data () {
    return {
      islogin: false,
      userName: '',
      url: [oneP, twoP],
      wantCount: 0,
      watchCount: 0
    }
  },
  created () {
    this.wantCount = Object.keys(this.$store.state.want).length
    this.watchCount = Object.keys(this.$store.state.watched).length
    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    } else {
      this.userName = Cookie.get('userName')
      this.islogin = true
    }
  },
  methods: {
    go (val) {
      this.$router.push({
        name: 'collect',
        params: {
          which: val
        }
      })
    },
    del () {
      Cookie.remove('userName')
      this.$router.push({
        path: '/',
        name: 'login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  text-align: left;
  text-indent: 1em;
  font-size: 18px;
  padding: 5px;
}
section {
  li {
    background: #dbdbdb;
    text-align: center;
    position: relative;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    text-align: left;
    text-indent: 20px;
  }
  li:first-of-type {
    height: 180px;
  }
  div {
    width: 150px;
    height: 180px;
    position: relative;
    padding: 0 calc(100%/2 - 75px);
    img {
      width: 130px;
      height: 150px;
      border-radius: 50%;
    }
    span {
      position: absolute;
      left: calc(100%/2 - 65px);
      bottom: 10px;
      height: 25px;
    }
    button{
      position: absolute;
      left: calc(100%/2);
      bottom: 0px;
      height: 25px;
    }
  }
}
.collect{
  button{
    height: 30px;
    width: 80px;
    background: #999;
    outline: none;
    border: none;
    margin-left: 10px;
  }
}

</style>
