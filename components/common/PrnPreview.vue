<template>
  <div
    class="prn-video elevation-4"
    @mouseenter="startAutoplay"
    @mouseleave="stopAutoplay"
  >
      <swiper
        ref="swiper"
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="thumbnail in item.thumbnails"
          :key="thumbnail.id"
        >
          <div class="swiper-slide__wrapper">
            <div class="swiper-slide__play">
              <nuxt-link class="vcp-layer play-pause-layer" :to="{ name: 'video', query: { id: item.id } }" target="_blank">
                <a class="btn-control btn-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 41 47">
                    <path d="M23.5,0,47,41H0Z" transform="translate(41) rotate(90)" fill="#ff6060"></path>
                  </svg>
                </a>
              </nuxt-link>
            </div>
            <div class="swiper-slide__image">
              <img :src="thumbnail.src" alt="" width="100%">
            </div>
          </div>
        </swiper-slide>
        <div ref="pagination" slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'PrnVideo',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  },
  mounted() {
    this.stopAutoplay()
    this.initProgressBar()
  },
  methods: {
    initProgressBar() {
      const pagination = this.$refs.pagination
      const spanElement = pagination.querySelector('span')
      spanElement.style.backgroundColor = '#ff6060'
    },
    startAutoplay() {
      this.$refs?.swiper?.$swiper?.autoplay?.start()
    },
    stopAutoplay() {
      this.$refs?.swiper?.$swiper?.autoplay?.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  &__wrapper {
    position: relative;
  }
  &__play {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
  }
  &__image {
    width: 434px;
    height: 252px;
  }
}
</style>
