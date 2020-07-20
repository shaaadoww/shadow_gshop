<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link slot="search" class="header_search" to="/seacher">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" class="header_login" :to="userInfo._id ? '/profile' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <swiper class="msite_nav" :options="swiperOption" v-if="categorys.length">
      <swiper-slide class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
        <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
          <div class="food_container">
            <img :src="baseImageUrl+category.image_url">
          </div>
          <span>{{category.title}}</span>
        </a>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- Add Pagination -->
    </swiper>
    <div style="margin-top: 45px" v-else>
      <img src="./images/msite_back.svg" alt="back">
    </div>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
      </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from "../../components/ShopList/ShopList";

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  // import style
  import 'swiper/css/swiper.css'


  export default {
    mounted() {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com',
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },

    computed: {
      ...mapState(['address', 'categorys', 'userInfo']),

      /*
      * 根据categorys一维数组生成一个二维数组
      * 小数组中的元素个数最大为8
      * */
      categorysArr () {
        const { categorys } = this
        //准备空的2维数组
        const arr = []
        let minArr = []
        categorys.forEach( c => {
          //如果当前小组已经满了，创建一个新的
          if(minArr.length === 8){
            minArr = []
          }
          //如果minArr是空的，将小数组保存到大数组中
          if(minArr.length === 0){
            arr.push(minArr)
          }
          minArr.push(c)
        })

        return arr
        }
      },
      components: {
        Swiper,
        SwiperSlide,
        HeaderTop,
        ShopList
      }

	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff


      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
