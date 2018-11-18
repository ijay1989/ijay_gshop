<template>
  <div id="app">
<router-view></router-view>
<!-- $route 获取当前页面路由属性信息-->
<FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
