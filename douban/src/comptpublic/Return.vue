<template>
<button @click="ret">返回</button>
</template>

<script>
export default {
  name: 'ret',
  methods: {
    ret () {
      this.$emit('ret')
    }
  }
}
</script>

<style lang="less" scoped>
button{
  position: fixed;
  left: 10px;
  top: 10px;
  width: 60px;
  height: 30px;
  background: #fff;
  border-radius: 10px;
  z-index: 100;
  color: #44883E;
}
</style>
