<template>
  <div id="app">
    <!-- 头部 -->
    <layoutHeader />
    <div class="wrapper">
      <router-view/>
    </div>
    <!-- 尾部 -->
    <layoutFooter />
  </div>
</template>
<script>
import layoutHeader from '@/components/layout-header'
import layoutFooter from '@/components/layout-footer'
export default {
  components: {
    layoutHeader,
    layoutFooter
  }
}
</script>
<style lang="less" >

</style>
