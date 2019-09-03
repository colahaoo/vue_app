<template>
    <div class="rating">
        <span class="iconfont icon-star" :class="rating >= 0.5 ? 'active' : '' "></span>
        <span class="iconfont icon-star" :class="rating >= 1 ? 'active' : '' "></span>
        <span class="iconfont icon-star" :class="rating >= 2 ? 'active' : '' "></span>
        <span class="iconfont icon-star" :class="rating >= 3 ? 'active' : '' "></span>
        <span class="iconfont icon-star" :class="rating >= 4 ? 'active' : '' "></span>
    </div>
</template>

<script>
export default {
    props:{
        rating: Number
    }
}
</script>

<style lang="scss">
.active {
    color:rgb(245, 166, 19)
}
</style>