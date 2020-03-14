<template>
  <div class="item" v-if="detail">
        <img :src="`https://images.weserv.nl/?url=${detail.images.large}`" alt="">
        <div>
          <p>豆瓣评分：{{detail.rating.average}}</p>
          <p>产地：{{detail.countries[0]}}</p>
          <p><span class="tag" v-for="item in detail.genres" :key="item">{{item}}</span></p>
          <p>{{detail.summary}}</p>
          <!-- <p>亚历克斯·霍诺德从2009年就梦想着徒手攀登酋长岩，此后尝试了1000多次，而徒手攀登酋长岩是自己的 “终极目标”。为此，他准备了一年半的时间，借助绳索攀爬过近60次酋长岩。他表示，自己这样做并非为了进行预演，而是反复尝试不同的岩点，研究攻克最难的区域。纪录片拍下了约塞米蒂国家公园及酋长岩的壮丽景色及霍诺德登顶的历史时刻。除此之外，片中还回顾了他怎样处理极限目标带来的生命风险，以及他如何追求卓越完美，从而在无绳索保护的情况下保证万无一失。</p> -->
        </div>
      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.$store.dispatch('getDetail', this.$route.params.id)
  },
  computed: {
    ...mapState(['detail'])
  }
}
</script>

<style>

</style>
