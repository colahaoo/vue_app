<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>
export default {	
}
</script>

<style lang="scss">
html, body, #app{width:100%;height:100%;}
#app .header{width:100%;height:50px;text-align:center;color:#666;}
#app .header .icon{position:fixed;left:10px;top:5px;}
#app .content{text-align:center;}
#app .content p{color:#666;}
#app .footer{position:fixed;bottom:0;height:40px;}
</style>
