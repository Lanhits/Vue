<template>
  <section id="det">
    <header>详情</header>
    <ret @ret="ret"></ret>
    <div id="topkong"></div>
    <ul v-show="isShow">
      <li class="mian">
        <img :src="one.images.small">
        <h3>{{one.title}}</h3>
        <p>({{one.year}})</p>
        <p>
          产地：<span v-for="(item, i) in one.countries" :key="item + i">{{item}}</span><br/>
          时长：<span v-for="(item, i) in one.durations" :key="item + i">{{item}}</span><br/>
          上映：<span v-for="(item, i) in one.pubdates" :key="item + i">{{item}}</span><br/>
          编剧：<span v-for="item in one.writers" :key="item.name">{{item.name}}</span><br/>
          评分：<span>{{one.rating.average}}</span><br/>
          语言：<span v-for="item in one.languages" :key="item">{{item}}</span>
        </p>
        <button @click="want(one)">想看</button>
        <button @click="watched(one)">看过</button>
      </li>
      <li class="tag">
        频道 <span v-for="item in one.genres" :key="item">{{item}}</span>
      </li>
      <li class="spl">
        <h3>简介</h3>
        <p>{{one.summary}}</p>
      </li>
      <li class="act">
        <h3>演员表</h3>
        <div v-for="item in one.casts" :key="item.name">
          <img :src="item.avatars.small">
          <P>{{item.name}}</P>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import {reqmovies} from '@/api/movie'
import ret from '@/comptpublic/Return'

let retHash = ''
const vm = {
  name: 'det',
  components: {
    ret
  },
  data () {
    return {
      one: {},
      isShow: false
    }
  },
  watch: {
    $route (val) {
      // 进来是进行数据请求 完成后展示页面
      if (val.params.i) {
        reqmovies({
          url: '/subject/' + val.params.i
        }).then((data) => {
          this.one = data
          this.isShow = true
        })
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    retHash = from.path
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 离开时隐藏页面 下次进来就不会看到本次的残留页面
    if (this.isShow) {
      this.isShow = false
    }
    next()
  },
  methods: {
    want (one) {
      // 想看的收藏触发数据修改
      this.$store.commit('want', {[one.id]: one})
    },
    watched (one) {
      // 已看过的收藏触发数据修改
      this.$store.commit('watched', {[one.id]: one})
    },
    ret () {
      // 返回
      this.$router.push({ path: retHash })
    }
  }
}

export default vm
</script>

<style lang="less" scoped>
li,p,h3{
  text-align: left;
}
.mian{
  position: relative;
  height: 240px;
  img{
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 220px;
  }
  h3,p{
    padding-left: 41%;
    margin-top: 10px;
    span{
      font-size: 14px;
    }
  }
  button{
    position: relative;
    left: 41%;
    width: 80px;
    margin-top: 5px;
    height: 30px;
    outline: none;
    background: #666;
    border: none;
  }
}
.tag{
  margin-top: 20px;
  span{
    display: inline-block;
    width: 60px;
    height: 30px;
    background: #999;
    border-radius: 8px;
    line-height: 30px;
    text-align: center;
  }
}
.spl{
  p{
    width:98%;
    padding: 10px;
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    height: 78px;
    overflow:hidden;
  }
}
.act{
  div{
    width: 46%;
    height: 270px;
    position: relative;
    display: inline-block;
    img{
      width: 100%;
      height: 240px;
    }
  }
}
</style>
