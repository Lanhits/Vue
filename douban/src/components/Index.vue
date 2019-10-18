<template>
  <section id="index">
    <header>{{routerName}}</header>
    <div id="topkong"></div>
    <crumbnav :which="routerName"></crumbnav>
    <keep-alive>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <aaa @changeIndex="changeIndex" :now="index"></aaa>
  </section>
</template>

<script>
import oneP from '@/assets/mylover.jpg'
import twoP from '@/assets/icon/login.png'

import aaa from '@/comptpublic/Footer'
import crumbnav from '@/comptpublic/Crumbnav'

import Cookie from 'js-cookie'
export default {
  name: 'index',
  // 注册组件
  components: {
    aaa,
    crumbnav
  },
  data () {
    return {
      islogin: false,
      userName: '',
      url: [oneP, twoP],
      index: 0,
      routerName: '首页',
      wantCount: 0,
      watchCount: 0,
      transitionName: 'slide-left'
    }
  },
  watch: {
    $route (to, from) {
      this.transitionName = to.meta.index > from.meta.index ? 'slide-left' : 'slide-right'
      this.changeIndex(to.meta)
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
    }
  },
  created () {
    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    } else {
      this.userName = Cookie.get('userName')
      this.islogin = true
    }
    this.routerName = this.$route.meta.name
    this.changeIndex(this.$route.meta)
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
    },
    changeIndex (meta) {
      this.index = meta.index
      this.routerName = meta.name
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
