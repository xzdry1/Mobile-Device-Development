<template lang="pug">
div.swiper-wrap
  swiper(:options='swiperOption' v-if="showSwiper")
    swiper-slide( v-for="item of swipers" :key="item.id"): img(:src="item.src" :alt="item.alt" )
    .swiper-pagination(slot='pagination')  

</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swipers: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 5000 //3.0以下api
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swipers.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.swiper-wrap >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-wrap {
  width: 100%;
  background: #fff;
  height: 0;
  // height: 31.25vw;//相对视图比高为31.25，单兼容性可能有问题
  overflow: hidden;
  padding-bottom: 30.59%;
}

img {
  width: 100%;
}
</style>
