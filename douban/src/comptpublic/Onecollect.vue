<template>
  <section>
    <img :src="one.images.small">
    <ul>
      <li class="title">{{one.title}}</li>
      <li>{{one.year}}</li>
      <li>
        <span v-for="(item, i) in one.countries" :key="item + i">{{item}}</span>
        <span v-for="item in one.genres" :key="item">{{item}}</span>
      </li>
      <li class="spl">{{one.summary}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'onecollect',
  props: ['one']
}
</script>

<style lang="less" scoped>
section{
  position: relative;
  margin-top: 10px;
  img{
    position: absolute;
    width: 30%;
    height: 180px;
  }
  ul{
    height: 180px;
  }
  li{
    margin-top: 3px;
    padding-left: 31%;
    text-align: left;
  }
  .spl{
    padding-left: 31%;
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  span{
    margin-left: 5px;
    border-radius: 5px;
    background: #999;
    padding: 3px;
    display: inline-block;
    width: 50px;
    line-height: 25px;
    text-align: center;
    font-size: 10px;
  }
  .title{
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
