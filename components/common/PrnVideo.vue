<template>
  <div class="prn-video">
    <div v-if="played">
      <vue-core-video-player
        src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4"
      ></vue-core-video-player>
    </div>
    <div
      v-else
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
              <div class="vcp-layer play-pause-layer">
                <a class="btn-control btn-play" @click="play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 41 47">
                    <path d="M23.5,0,47,41H0Z" transform="translate(41) rotate(90)" fill="#ff6060"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="swiper-slide__image">
              <img :src="thumbnail.src" alt="" width="100%">
            </div>
          </div>
        </swiper-slide>
        <div ref="pagination" slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
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
      },
      played: false
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
    play() {
      this.played = true
    },
    endedVideo() {
      this.played = false
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
  }
  &__image {
    width: 434px;
    height: 252px;
  }
}
</style>
