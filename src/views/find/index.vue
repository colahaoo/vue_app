<template>
  <div class="container">
    <header class="header">
      <ul>
        <li>
          <span class="iconfont icon-icon-test1"></span>
        </li>
        <li>
        <van-search class="search" shape="round" placeholder="搜索目的地、活动" v-model="value" />
        </li>
      </ul>
    </header>
    <div class="content">
      <van-notice-bar
        text="俄罗斯冬日七日游，一起领略贝加尔湖畔冰封的美景，感受冰与雪的魅力，价格让您心动，我们等着您！"
        left-icon="volume-o"
      />
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="choice">
        <p>
          <span class="iconfont icon-mudedi"></span>
        </p>
        <p class="font">目的地</p>
        <p>
          <span class="iconfont icon-fenzu"></span>
        </p>
        <p class="font">美食</p>
        <p>
          <span class="iconfont icon-chuhang"></span>
        </p>
        <p class="font">出行</p>
        <p>
          <span class="iconfont icon-zhuti"></span>
        </p>
        <p class="font">主题</p>
      </div>
      <van-divider>推荐活动</van-divider>
      <div class="activity">
        <div class="box">
          <img src="http://img1.qunarzz.com/travel/d5/1610/33/3e114a2e8c4b57b5.jpg_r_680x488x95_8ddafe05.jpg" />
          <h2>魅力冰城</h2>
          <span class="price">价格</span>
          <span>6666人去过/1111人想去</span>
        </div>
        <div class="box">
          <img src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1411/14/c0/27661_1415918871486_mthumb.jpg" />
          <h2>大理之行</h2>
          <span class="price">价格</span>
          <span>6666人去过/1111人想去</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568029463&di=122ca210c55f1fe979be94e62454dc2d&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161113%2F9af52f704fe34f00bdc510aac21a788b_th.jpg" />
          <h2>冰封贝加尔湖</h2>
          <span class="price">价格</span>
          <span>6666人去过/1111人想去</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567435280920&di=08cbc43fb71b3bf9e8528923e7adba4f&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F10020t000000iwhja59BA_R_671_10000_Q90.png" />
          <h2>最美丽江</h2>
          <span class="price">价格</span>
          <span>6666人去过/1111人想去</span>
        </div>
      </div>
      <van-divider>推荐目的地</van-divider>
      <div class="destination">
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567436717072&di=cbf01284678857c7427fc9419144fb45&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100k0u000000j8uqnE67D_R_1024_10000_Q90.jpg" />
          <span>丽江</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567436735166&di=f46712a4ad5af4f2eb687dc6f58c9166&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F19938%2F19937296.JPG" />
          <span>大理</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568031775&di=1f13363901d29d71d19ae307c798f2f6&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1302%2F25%2Fc3%2F18407549_18407549_1361790049429.jpg" />
          <span>雪乡</span>
        </div>
        <div class="box">
          <img src="http://img01.kpkpw.com/2012/02/27/20120227122547ZGQ.jpg" />
          <span>重庆</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568033033&di=c945ddfe4a6e0de571cc6cbfcda16b65&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1303%2F16%2Fc2%2F18952365_1363398107493.jpg" />
          <span>三亚</span>
        </div>
        <div class="box">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568033138&di=08c9a4fffb9bf70cf4fde56548b86eb6&imgtype=jpg&er=1&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F657%2F054%2F619%2F81888e3144324e8393c650485d400bbf.jpg" />
          <span>黄山</span>
        </div>
      </div>
      <van-divider>发现趣事</van-divider>
      <div class="fun">

      </div>
    </div>
    <footer class="footer">
      <div class="box">

      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Swipe, SwipeItem, Lazyload, Divider, NoticeBar } from 'vant'

Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Divider)
Vue.use(NoticeBar)

export default {
  data () {
    return {
      images: [
        'https://imgsrc.baidu.com/baike/pic/item/7e3e6709c93d70cf30ac38a3f5dcd100bba12bcd.jpg',
        'https://imgsrc.baidu.com/baike/pic/item/bf096b63f6246b60984d20dae6f81a4c500fa2d9.jpg',
        'http://5b0988e595225.cdn.sohucs.com/images/20190104/1bbbf48e72bf487fb0cfbeed83c56a5a.jpeg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2706791310,1291817448&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style>
.container .header ul{display:flex;justify-content: center;}
.container .header .iconfont{color:rgb(255, 122, 34);font-size:30px;left:10px;top:10px;position:absolute;}
.container .header .search{margin-left:20px;width:310px;}
.content .banner img{width:100%;height:180px;}
.content .iconfont{font-size:30px;margin:0 10px;}
.content .icon-mudedi{color:darkturquoise;}
.content .icon-fenzu{color:rgb(199, 107, 45);}
.content .icon-chuhang{color:rgb(245, 234, 76);}
.content .icon-zhuti{color:lawngreen;}
.content .choice{display:flex;}
.content .choice p{font-size: 14px;}
.content .choice .font{margin-top:20px;}
.content .activity{display:flex;flex-wrap:wrap;}
.content .activity img{width:150px;height:100px;}
.content .activity .box{width:170px;flex:1;}
.content .activity .box h2{margin:0;font-size:16px;}
.content .activity .box span{margin:0 2px;font-size:12px;}
.content .activity .box .price{margin-right:10px;}
.content .destination{display:flex;flex-wrap: wrap;}
.content .destination .box{flex:1;position:relative;}
.content .destination .box img{width:120px;height:120px;}
.content .destination .box span{position:absolute;bottom:0;right:0;color:rgb(235, 103, 43);font-size:20px;}
.footer .box{height:40px;}
</style>
