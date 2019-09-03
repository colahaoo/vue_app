<template>
  <div class="container">
    <header class="header">
      <van-icon name="arrow-left" class="icon" @click="back" />
      忘记密码
      </header>
    <div class="content">
      <van-cell-group>
        <van-field v-model="username" placeholder="手机号" :error-message="usernamemsg" />
      </van-cell-group>
      <van-divider />
      <van-cell-group>
        <van-field
          v-model="code"
          center
          clearable
          placeholder="请输入短信验证码"
          :error-message="codemsg"
        >
        <van-button slot="button" size="small" type="primary" :disabled="disabled" @click="sendCode">{{ btnmsg }}</van-button>
        </van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Divider, Icon, Button, Toast} from 'vant'
import axios from 'axios'
Vue.use(Field)
Vue.use(Divider)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Toast)

export default {
  data () {
    return {
      code: '',
      btnmsg: '发送验证码',
      disabled: false
    }
  },
  computed: {
    codemsg () {
      if (this.code === '') {
        return ''
      } else if (this.code.length !== 5) {
        return '验证码格式错误'
      } else {
        return ''
      }
    }
  },
  methods: {
    back () {
      this.$router.replace('/login')
    },
    sendCode () {
      let time = 4
      let timer
      timer = setInterval(() => {
        time --
        if (time === 0) {
          clearInterval(timer)
          this.disabled = false
          this.btnmsg = '发送验证码'
          return
        }
        this.disabled = true
        this.btnmsg = time + 's后重新发送'
      },1000)
      this.getCode()
    },
    getCode () {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        Toast('请输入正确的手机号码')
      } else {
        axios.get('https://www.daxunxun.com/users/sendCode?tel=' + this.username).then(res => {
          if (res.data === 1) {
            Toast('用户名已注册，请直接登录')
          } else if (res.data === 0) {
            Toast('获取验证码失败')
          } else {
            this.adminCode = res.data.code
          }
        })
      }
    }
  }
}
</script>

<style>
.content{margin-top:150px;}
</style>