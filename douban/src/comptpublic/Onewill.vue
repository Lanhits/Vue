<template>
  <section id="onemovie" @click="all">
    <img :src="theone.images.small">
    <p>
      <span v-for="item in theone.genres" :key="item">{{item}}</span>
    </p>
    <h3>{{theone.title}}</h3>
  </section>
</template>

<script>
export default {
  name: 'onemovie',
  props: ['theone'],
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
  p {
    height: 20px;
    position: relative;
  }
  h3 {
    font-size: 16px;
  }
}
</style>
