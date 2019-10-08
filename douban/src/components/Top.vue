<template>
  <section id="top" :style="{'height': screenH}">
    <onemovie v-for="(item,val) in movielist" :theone="item" :key="val" @all="all(item)"></onemovie>
    <aaa now="3"></aaa>
  </section>
</template>

<script>
import Cookie from 'js-cookie'

import aaa from '@/comptpublic/Footer'
import onemovie from '@/comptpublic/Onemovie'
import crumbnav from '@/comptpublic/Crumbnav'

import {reqmovies} from '@/api/movie.js'

export default {
  name: 'hot',
  components: {
    aaa,
    onemovie,
    crumbnav
  },
  data () {
    return {
      movielist: [],
      start: 1,
      isReq: false,
      screenH: 660
    }
  },
  created () {
    reqmovies({
      url: '/top250',
      data: {
        start: this.start
      }
    }).then(data => {
      this.movielist = data.subjects
      this.start += 20
      this.isReq = true
    })

    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    }
    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    } else {
      this.userName = Cookie.get('userName')
      this.islogin = true
    }

    this.screenH = window.screen.availHeightt - 50
  },
  mounted () {
    /**
     *  在这里写滚动事件
     *  这里可以获取到节点 从而获取节点的滚动距离 但是元素滚动需要两个条件 1 有固定高 2 内容超过固定高并且设置overflow:auto
     * */
    const oTop = document.getElementById('top')
    const This = this
    oTop.onscroll = function () {
      // 百分之70以上执行请求
      const prec = Math.floor(this.scrollTop / (this.scrollHeight - 670) * 100)
      if (prec > 70 && This.isReq) {
        This.isReq = false
        reqmovies({
          url: '/top250',
          data: {
            start: This.start
          }
        }).then(data => {
          let newDate = data.subjects
          This.start += 20
          This.isReq = true
          if (This.start > 250) {
            This.isReq = false
          }
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

<style scoped>
</style>>
