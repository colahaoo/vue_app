<template>
    <ul class="prolist">
        <router-link :to="{ name: 'detail', params:{ id:item.id }}" tag="li" class="proitem" v-for="(item,index) of prolist" :key="item.id">
        <!-- <li class="proitem" v-for="(item, index) of prolist" @click="goDetail(item.id)" :key="item.id"> -->
            <div class="itemImg">
                <img :src="item.images.small" alt="">
            </div>
            <div class="itemInfo">
                <h4>{{index}}--{{item.title}}</h4>
                <div>
                    演员：
                    <span v-for="itm of item.casts" :key="itm.id"> {{itm.name}} /</span>
                </div>
                <div>
                    导演：
                    <span v-for="itm of item.directors" :key="itm.id"> {{itm.name}} /</span>
                </div>
                <!-- <p>
                    评分： {{item.rating.average}}  
                    /   票房： {{item.collect_count}}
                </p> -->
                <Rating :rating="(item.rating.average / 2).toFixed(1) * 1" />
            </div>
        </router-link>
    </ul>
</template>

<script>
import Rating from "./Rating"
export default {
    // props: ["prolist"]
    props: {
        prolist: Array
    },
    components: {
        Rating
    }
    // methods: {
    //     goDetail (id) {
    //         this.$router.push({path: '/detail/' + id})
    //     }
    // }
    // }
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";

.prolist {

    .proitem {
        @include rect(100%,1.2rem);
        @include flexbox();
        @include border(0 0 1px 0, #ccc,solid);
        .itemImg {
            @include rect(1.2rem,1.2rem);
            img {
                @include rect(1rem,1rem);
                @include border(1px,#333,solid);
                @include margin(0.1rem);
            }
        }
            .itemInfo {
                @include flex()
            }
    }
}
</style>