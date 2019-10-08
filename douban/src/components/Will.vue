<template>
  <section id="will" :style="{'height': screenH}">
    <onewill v-for="(item,val) in movielist" :theone="item" @all="all(item)" :key="val"></onewill>
    <aaa now="4"></aaa>
  </section>
</template>

<script>
import Cookie from 'js-cookie'

import aaa from '@/comptpublic/Footer'
import onewill from '@/comptpublic/Onewill'
import crumbnav from '@/comptpublic/Crumbnav'

import {reqmovies} from '@/api/movie'
export default {
  name: 'hot',
  components: {
    aaa,
    onewill,
    crumbnav
  },
  data () {
    return {
      movielist: [],
      isReq: false,
      start: 1,
      screenH: 660
    }
  },
  created () {
    reqmovies({
      url: '/coming_soon',
      data: {
        sart: this.start
      }
    }).then(data => {
      this.movielist = data.subjects
      this.isReq = true
      this.start += 20
    })
    if (!Cookie.get('userName')) {
      this.$router.push({
        path: '/',
        name: 'login'
      })
    }

    this.screenH = window.screen.availHeight - 50
  },
  mounted () {
    /**
     *  在这里写滚动事件
     *  这里可以获取到节点 从而获取节点的滚动距离 但是元素滚动需要两个条件 1 有固定高 2 内容超过固定高并且设置overflow:auto
     * */
    const oTop = document.getElementById('will')
    const This = this
    oTop.onscroll = function () {
      // 百分之70以上执行请求
      const prec = Math.floor(this.scrollTop / (this.scrollHeight - 670) * 100)
      if (prec > 70 && This.isReq) {
        This.isReq = false
        reqmovies({
          url: '/coming_soon',
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

<style>

</style>
