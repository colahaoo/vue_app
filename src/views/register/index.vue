<template>
  <div class="container">
    <header class="header">
      <van-icon name="arrow-left" class="icon" />
      注册账号
    </header>
    <div class="content">
      <van-cell-group>
        <van-field v-model="username" placeholder="手机号"
        :error-message="usernamemsg"
        />
      </van-cell-group>
      <van-divider />
      <van-cell-group>
        <van-field
          v-model="code"
          center
          clearable
          placeholder="请输入短信验证码"
          :error-message="codemsg" >
          <van-button slot="button" size="small" type="primary" @click="sendCode" :disabled="disabled">{{ btnmsg }}</van-button>
        </van-field>
      </van-cell-group>
      <van-divider :style="{ color: '#666', borderColor: 'white',  fontSize: '18px' }" content-position="right" @click="setPassword">下一步</van-divider>
    </div>
    <footer class="footer">底部</footer>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Icon, Field, Divider, Button, Toast } from 'vant'
Vue.use(Icon)
Vue.use(Field)
Vue.use(Divider)
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
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
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
    sendCode () {
      let time = 4
      let timer
      timer = setInterval(() => {
        time--
        if (time === 0) {
          clearInterval(timer)
          this.disabled = false
          this.btnmsg = '发送验证码'
          return
        }
        this.disabled = true
        this.btnmsg = time + 's后重新发送'
      }, 1000)
      this.getCode()
    },
    getCode () {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        Toast('请输入正确的手机号码')
      } else {
       
        }
    }
  }
}
</script>

<style>
.content{margin-top:150px;}
</style>
