<template>
  <div id="app" >
    <div class="imgScreen lg:w-3/4 h-64 lg:h-auto relative">
      <img class="absolute inset-0 w-full h-full" src="./assets/ole_background.jpg" alt="Imagen">
    </div>
      <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterHome from '@/components/FooterHome.vue';
import CardSvg from '@/components/CardsSvg.vue';
import ServicePay from '@/components/ServicePay.vue';

export default {
  components:{
    NavBar,
    FooterHome,
    CardSvg,
    ServicePay
  }
}
</script>

<style>
@media (max-width: 1024px) {
  .imgScreen {
    display: none;
  }
}
.footerSvg{
  position: fixed;
  bottom: 17px;
  left: 0;
  right: 0;
  justify-content: center;
  z-index: 9999;
}
.footerHome {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  justify-content: center;
  z-index: 9999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
</style>
