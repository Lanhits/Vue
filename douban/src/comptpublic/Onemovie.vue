<template>
  <section id="onemovie" @click="all">
    <img :src="theone.images.small">
    <star :average="theone.rating.average"></star>
    <h3>{{theone.title}}</h3>
  </section>
</template>

<script>
import star from './Star'
export default {
  name: 'onemovie',
  props: ['theone'],
  components: {
    star
  },
  methods: {
    all () {
      this.$emit('all')
    }
  }
}
</script>

<style lang="less" scoped>
#onemovie {
  width: 45%;
  display: inline-block;
  position: relative;
  margin-left: 10px;
  img {
    width: 100%;
    height: 240px;
  }
  h3{
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
