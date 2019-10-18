<template>
  <section class="login">
    <h2>账号密码登录</h2>
    <ul>
      <li>
        <input type="text" placeholder="账号" v-model="userName" @blur="userNameTest">
        <p :class="{'active': !isTrueUserName}">{{userPlacehouder}}</p>
      </li>
      <li>
        <input type="password" placeholder="密码" v-model="passWord" @blur="passWordTest">
        <p>{{passWordPlacehouder}}</p>
      </li>
      <li>
        <button @click="login">{{islogin ? '正在登录...' : '登录'}}</button>
      </li>
    </ul>
  </section>
</template>

<script>
import login from '@/jscode/login'
import Cookie from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      userPlacehouder: '',
      isTrueUserName: false,
      passWord: '',
      passWordPlacehouder: '',
      isTruePassWord: false,
      islogin: false
    }
  },
  methods: {
    login () {
      if (this.islogin) { return } else { this.islogin = true }
      login(this.userName, this.passWord).then(response => {
        Cookie.set('userName', this.userName)
        this.$router.push({
          path: '/index'
        })
        this.islogin = false
      }).catch(() => {
        this.islogin = false
        alert('请求超时，登录失败,有时easymoke接口错误可以手动在cookie加上userName关键字，路由加上index进行体验')
      })
    },
    userNameTest () {
      let reg = /^[a-zA-Z]\w{3,15}/
      if (!this.userName) {
        this.userPlacehouder = '账号不能为空'
        this.isTrueUserName = false
      } else if (reg.test(this.userName)) {
        this.userPlacehouder = '√'
        this.isTrueUserName = true
      } else {
        this.userPlacehouder = '字母开头,4到16位（字母，数字，下划线，减号)'
        this.isTrueUserName = false
      }
    },
    passWordTest () {
      if (!this.passWord) {
        this.passWordPlacehouder = '密码不能为空'
      } else {
        this.passWordPlacehouder = ' '
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background: #D6F6DA;
  height: 100%;
  padding-top: 40px;
  height: 600px;
  h2 {
    color: #44883E;
    padding: 10px;
    text-align: center;
  }
  input,button,p {
    height: 50px;
    width: 80%;
    outline: none;
    border: none;
    margin-top: 10px;
  }
  input {
    text-indent: 10px;
    border-radius: 10px 10px 0 0;
  }
  button {
    background: #44883E;
    color: #fff;
    border-radius: 10px;
    letter-spacing: 5px;
    font-size: 20px;
    margin: 0 0 10px 0;
  }
  p {
    display: inline-block;
    color: #666;
    text-align: left;
    font-size: 12px;
    height: 20px;
  }
  .active {
    color: #ef3333;
  }
}
</style>
