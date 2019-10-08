<template>
  <section id="hot" :style="{'height': screenH + 'px'}">
    <div id="topkong"></div>
    <onemovie v-for="(item, i) in movielist" :theone="item" :key="i" @all="all(item)"></onemovie>
    <aaa now="2"></aaa>
  </section>
</template>

<script>
import Cookie from 'js-cookie'

import aaa from '@/comptpublic/Footer'
import onemovie from '@/comptpublic/Onemovie'

import {reqmovies} from '@/api/movie.js'
export default {
  name: 'hot',
  components: {
    aaa,
    onemovie
  },
  data () {
    return {
      movielist: [],
      isReq: false,
      start: 1,
      screenH: '660px'
    }
  },
  created () {
    // 请求数据
    reqmovies({
      url: '/in_theaters',
      data: {
        start: this.start
      }
    }).then(data => {
      this.movielist = data.subjects
      this.isReq = true
    })
    // 判断是否登录
    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    }
    // 获取屏幕高
    this.screenH = window.screen.availHeight - 50
  },
  mounted () {
    /**
     *  在这里写滚动事件
     *  这里可以获取到节点 从而获取节点的滚动距离 但是元素滚动需要两个条件 1 有固定高 2 内容超过固定高并且设置overflow:auto
     * */
    const oTop = document.getElementById('hot')
    const This = this
    oTop.onscroll = function () {
      // 百分之70以上执行请求
      const prec = Math.floor(this.scrollTop / (this.scrollHeight - 670) * 100)
      if (prec > 70 && This.isReq) {
        This.isReq = false
        reqmovies({
          url: '/in_theaters',
          data: {
            start: This.start
          }
        }).then(data => {
          let newDate = data.subjects
          This.start += 20
          This.isReq = true
          // if (This.start > 250) {
          //   This.isReq = false
          // }
          newDate.forEach(item => {
            This.movielist.push(item)
          })
        })
      }
    }
  },
  methods: {
    all (one) {
      // 跳转路由
      this.$router.push({
        name: 'det',
        params: {
          i: one.id
        }
      })
    }
  }
}
</script>

<style>

</style>
