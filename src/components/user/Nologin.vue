<template>
    <div>
        <router-link to="/login" tag="button">登录</router-link>
        <router-link to="/register" tag="button">注册</router-link>
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if (localStorage.getItem('isLogin') === 'ok') {
                next ('/user/loging')
            } else {
                next()
            }
        })
    }
}
</script>
