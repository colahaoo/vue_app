<template>
  <div class="container">
    <header class="header">
      <van-icon name="arrow-left" class="icon" />
      登录
    </header>
    <div class="content">
      <span class="iconfont icon-icon-test"></span>
      <van-cell-group>
        <van-field v-model="username" placeholder="手机号" :error-message="usernamemsg" />
      </van-cell-group>
      <van-divider />
      <van-cell-group>
        <van-field v-model="password" placeholder="密码" type="password" :error-message="passwordmsg" />
      </van-cell-group>
      <van-divider />
      <van-button type="primary" size="large" :loading="loading" loading-text="登录中..." :disabled="flag" @click="login">登录</van-button>
      <van-divider @click="toForget">忘记密码</van-divider>
    </div>
    <footer class="footer">
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-weibo"></span>
      <span class="iconfont icon-qq"></span>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field ,Icon, Divider, Button, Toast} from 'vant'
import axios from 'axios'
Vue.use(Field)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(Button)
Vue.use(Toast)

export default {
  data () {
    return {
      username: '18804653389',
      password: '123456',
      loading: false,
      flag: false
    }
  },
  computed: {
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    passwordmsg () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 6) {
        return '密码最少为六位'
      } else if (this.password.length >= 7) {
        return '请输入六位密码'
      }
    }
  },
  methods: {
    toForget () {
      this.$router.replace('/forget')
    },
    login () {
      if (this.username === '' || this.usernamemsg === '手机号码格式错误') {
        Toast('手机号码输入有误')
        return
      }
      if (this.password === '' || this.passwordmsg === '密码最少为六位' || this.passwordmsg === '请输入六位密码') {
        Toast('密码输入有误')
        return
      }
      this.loginFn()
    },
    loginFn () {
      this.flag = true
      this.loading = true
      axios.post('https://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.flag = false
        this.loading = false
        if (res.data === 2) {
          Toast('该用户未注册，请先注册')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else if (res.data === 0) {
          Toast('登录失败')
        } else {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok')
          this.$router.replace('/find')
        }
      }) 
    }
  }
}
</script>

<style>
.content{margin-top:150px;}
.content .iconfont{font-size:60px;color:rgb(248, 163, 66);}
.footer{display:flex;justify-content: center;}
.footer .iconfont{font-size:30px;}
.footer .icon-weixin{color:rgb(177, 241, 112);}
.footer .icon-weibo{color:rgb(248, 152, 117);}
.footer .icon-qq{color:rgb(133, 168, 233);}
</style>
