<template>
  <section class="page--index">
    <v-row wrap>
      <v-flex
        v-for="(item, index) in getItems"
        :key="item.id"
        xs12
        sm6
        lg4
        pa-2
      >
        <swiper :ref="`swiper-${index}`" class="swiper" :options="item.swiperOption" @slideChange="startAutoplay(index)">
          <swiper-slide
            v-for="thumbnail in item.thumbnails"
            :key="thumbnail.id"
          >
            <img :src="thumbnail.src" alt="">
            <!-- <v-img
              :lazy-src="thumbnail.lazySrc"
              :src="thumbnail.src"
            ></v-img> -->
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </v-flex>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true
      },
      items: [
        {
          id: 1,
          thumbnails: [
            {
              id: 1,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 2,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 3,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            }
          ]
        },
        {
          id: 2,
          thumbnails: [
            {
              id: 1,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 2,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 3,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            }
          ]
        },
        {
          id: 3,
          thumbnails: [
            {
              id: 1,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 2,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 3,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            }
          ]
        },
        {
          id: 4,
          thumbnails: [
            {
              id: 1,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 2,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 3,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            }
          ]
        },
        {
          id: 5,
          thumbnails: [
            {
              id: 1,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 2,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            },
            {
              id: 3,
              src: 'https://picsum.photos/id/11/500/300',
              lazySrc: 'https://picsum.photos/id/11/10/6'
            }
          ]
        }
      ],
      getItems: []
    }
  },
  mounted() {
    this.getItems = this.items.map(item => {
      return {
        ...item,
        swiperOption: JSON.parse(JSON.stringify(this.swiperOption))
      }
    })

    this.$nextTick(() => {
      this.stopAllSwiper()
    })
  },
  methods: {
    stopAllSwiper() {
      this.getItems.forEach((item, index) => {
        this.$refs[`swiper-${index}`][0].$swiper.autoplay.stop()
      })
    },
    startAutoplay(index) {
      this.stopAllSwiper()
      this.$refs[`swiper-${index}`][0].$swiper.autoplay.start()
    }
  }
}
</script>

<style lang="scss" scoped></style>
