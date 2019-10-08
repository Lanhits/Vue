<template>
  <footer>
    <router-link
      tag="span"
      v-for="(item, i) in navlist"
      :key="i"
      :class="{'active':now == i}"
      :to="item.path"
      @click="changeIndex"
    >{{item.title}}</router-link>
  </footer>
</template>

<script>
export default {
  name: 'afooter',
  props: ['now'],
  data () {
    return {
      navlist: [
        {title: '首页', path: '/index'},
        {title: '热映', path: '/index/hot'},
        {title: 'top250', path: '/index/top'},
        {title: '即将热映', path: '/index/will'}
      ]
    }
  },
  methods: {
    changeIndex (val) {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    line-height: 50px;
    background: white;
    span {
      width:calc(25% - 6px);
      float: left;
      border: #dbdbdb 1px solid;
      text-align: center;
    }
    .active {
      background: #666;
      color: white
    }
  }
</style>
