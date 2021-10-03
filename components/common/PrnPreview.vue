<template>
  <div
    class="prn-video"
    @mouseenter="startAutoplay"
    @mouseleave="stopAutoplay"
  >
    <nuxt-link
      class="prn-video__wrapper"
      :to="{ name: 'video-id', params: { id: item.Video.id } }"
      target="_blank"
    >
      <swiper
        ref="swiper"
        class="swiper elevation-4"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="photo in item.Video.VideoPhotos"
          :key="photo.id"
        >
          <div
            class="swiper-slide__wrapper"
          >
            <div class="swiper-slide__image">
              <v-img
                :src="$getImage(photo.url)"
                :alt="item.Video.name"
                height="100%"
              ></v-img>
            </div>
          </div>
        </swiper-slide>
        <div ref="pagination" slot="pagination" class="swiper-pagination"></div>
      </swiper>
      <span class="text-body-2 link--default">
        {{ item.Video.name }}
      </span>
    </nuxt-link >
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
    // this.initProgressBar()
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
  max-width: 383px;
  &__wrapper {
    margin: 0 auto;
  }
}
.swiper-slide {
  &__wrapper {
    position: relative;
  }
  &__image {
    height: 230px;
  }
}
</style>
