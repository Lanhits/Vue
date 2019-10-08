<template>
  <section>
    <header>{{which}}</header>
    <ret @ret="ret"></ret>
    <div id="topkong"></div>
    <onecollect v-for="(item, key) in list" :one="item" :key="key"></onecollect>
  </section>
</template>

<script>
import onecollect from '@/comptpublic/Onecollect'
import ret from '@/comptpublic/Return'

let retHash = ''

export default {
  name: 'collection',
  components: {
    onecollect,
    ret
  },
  data () {
    return {
      list: {},
      which: ''
    }
  },
  watch: {
    $route () {
      this.list = {}
      Object.assign(this.list, this.$store.state[this.$route.params.which])
      this.which = this.$route.params.which
    }
  },
  beforeRouteEnter (to, from, next) {
    retHash = from.path
    next()
  },
  methods: {
    ret () {
      this.$router.push({ path: retHash })
    }
  }
}

</script>

<style>

</style>
