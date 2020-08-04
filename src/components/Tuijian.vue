<template>
  <div class="Tuijian">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/4.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/5.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/6.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/7.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/8.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/2.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/1.jpg"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/20200512_180309_000 (4).png"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/20200512_180309_000 (2).png"/></router-link></div>
        <div class="swiper-slide"><router-link to="/HelloWorld/Tuijian/Tone"><img src="../components/img/20200512_180309_046.png"/></router-link></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name: "swiper",
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  }
</script>
<style scoped="scoped">
  @import 'swiper/css/swiper.css';

  .swiper-container {
    width: 30rem;
    height: 25rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 3rem;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img{
  	width: 28rem;
  }
</style>