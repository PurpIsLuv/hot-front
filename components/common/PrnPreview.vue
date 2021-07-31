<template>
  <div
    class="prn-video"
    @mouseenter="startAutoplay"
    @mouseleave="stopAutoplay"
  >
    <div class="prn-video__wrapper">
      <swiper
        ref="swiper"
        class="swiper elevation-4"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="thumbnail in item.thumbnails"
          :key="thumbnail.id"
        >
          <nuxt-link
            class="swiper-slide__wrapper"
            :to="{ name: 'video', query: { id: item.id } }"
            target="_blank"
          >
            <div class="swiper-slide__image">
              <img :src="thumbnail.src" alt="" width="100%">
            </div>
          </nuxt-link>
        </swiper-slide>
        <div ref="pagination" slot="pagination" class="swiper-pagination"></div>
      </swiper>
      <a
        class="text-body-2 link--default"
        @click.prevent="routeToVideo(item.id)"
      >Название видео</a>
    </div >
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
    },
    routeToVideo(id) {
      this.$router.push({ name: 'video', query: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.prn-video {
  &__wrapper {
    max-width: 434px;
    margin: 0 auto;
  }
}
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
  }
  &__image {
    width: 434px;
    height: 252px;
  }
}
</style>
