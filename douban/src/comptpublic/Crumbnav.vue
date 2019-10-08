<template>
  <section id="crumb">
    首页<span v-show="which !== '首页'">/{{which}}</span>
  </section>
</template>

<script>
export default {
  name: 'crumb',
  props: ['which']
}
</script>

<style lang="less" scoped>
#crumb{
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  span{
    font-size: 16px;
    color: #dbdbdd;
  }
}
</style>
