<template lang="pug">
div.icons-wrap 
  div.icons
    swiper(:options="swiperOption" v-if="showIcons")
      swiper-slide(v-for="(page,index) in pages" :key="index")
        div.icon(v-for="icon in page" :key="icon.id")
          div.icon-img 
            img.icon-img-content(:src="icon.src" :alt="icon.alt")
          p.icon-desc {{icon.alt}}
    .swiper-icon-pagination(slot='pagination')  
  </template>
<script>
export default {
  name: "HomeIcons",
  props: {
    icons: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        // pagination: ".swiper-pagination"
        pagination: ".swiper-icon-pagination"
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        !pages[page] && (pages[page] = []);
        pages[page].push(item);
      });
      return pages;
    },
    showIcons() {
      return this.icons.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';
@import '~@style/mixins.styl';

.icons >>> .swiper-pagination-bullet-active {
  background: #0366d6;
}

.icons >>> .swiper-pagination-bullet {
  margin: 0 5px;
  margin-bottom: 0.1rem;
}

.icons>>>.swiper-icon-pagination {
  text-align: center;
  -webkit-transition: 300ms;
  transition: 300ms;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.icons >>> .swiper-container { // 宽高比为2
  height: 0;
  padding-bottom: 50%; // 外层元素宽度的50%
}

.icons-wrap {
  background: #fff;
}

.icons {
  padding-top: 0.1rem;

  .icon {
    width: 25%;
    overflow: hidden;
    padding-bottom: 25%;
    float: left;
    position: relative;
    height: 0;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $dark_text_color;
      text-align: center;
      ellip();
    }
  }
}
</style>

