<template>
  <section>
    <span></span>
    <span :style="{'width': average ? average * 10 - 2 + 'px' : 1 + 'px'}"></span>
    {{average}}分
  </section>
</template>

<script>
export default {
  name: 'star',
  props: ['average']
}
</script>

<style lang="less" scoped>
  section {
    height: 20px;
    position: relative;
    span:first-of-type {
      display: inline-block;
      height: 100%;
      width: 99px;
      background: url('../assets/icon/star666.png');
    }
    span:last-of-type {
      position: absolute;
      left: 0;
      height: 100%;
      width: 88px;
      background: url('../assets/icon/staryellow.png');
    }
  }
</style>
