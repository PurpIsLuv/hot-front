<template>
  <section class="page--index">

    <!-- Секция видео -->
    <h4 class="text-h4 mx-2">New porno</h4>
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="(item) in items"
        :key="item.id"
        xs12
        sm6
        lg4
        xl3
        px-2
        py-4
      >
        <prn-preview
          :item="item"
        ></prn-preview>
      </v-flex>
    </v-row>
    <v-pagination
      v-model="page"
      class="my-4"
      color="#ff6060"
      :length="2"
    ></v-pagination>

    <!-- Секция категорий -->
    <h4 class="text-h4 mx-2">Categories</h4>
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="category in categories"
        :key="category.id"
        xs12
        sm6
        lg4
        xl3
        px-2
        py-4
      >
        <v-card
          class="mx-auto"
          max-width="400"
          :to="{ name: 'category-slug', params: { slug: category.slug } }"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="category.src || 'https://via.placeholder.com/400'"
            :alt="category.name"
          >
            <v-card-title color="red">{{ category.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
    <v-pagination
      v-model="categoryPage"
      class="my-4"
      color="#ff6060"
      :length="getCategoriesLength"
    ></v-pagination>

    <!-- Секция звезд -->
    <h4 class="text-h4 mx-2 mt-2">Pornstars</h4>
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="star in stars"
        :key="star.id"
        xs6
        sm4
        lg3
        xl2
        pa-2
      >
        <v-card
          class="mx-auto"
          width="175"
          height="260"
          :to="{ name: 'star-id', params: { id: star.id } }"
        >
          <v-img
            class="white--text align-end"
            width="175"
            height="260"
            :src="star.src || 'https://via.placeholder.com/300'"
            :alt="star.name"
          >
            <v-card-title>{{ star.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
    <v-pagination
      v-model="starPage"
      class="my-4"
      color="#ff6060"
      :length="getStarsLength"
    ></v-pagination>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      categoryPage: 1,
      starPage: 1,
      page: 1,
      items: [
        {
          id: 1,
          url: 'https://ss-sportexpress.cdnvideo.ru/userfiles/videoreports/60/60790.mp4',
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
          url: 'https://ss-sportexpress.cdnvideo.ru/userfiles/videoreports/60/60790.mp4',
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
          url: 'https://ss-sportexpress.cdnvideo.ru/userfiles/videoreports/60/60790.mp4',
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
          url: 'https://ss-sportexpress.cdnvideo.ru/userfiles/videoreports/60/60790.mp4',
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
          url: 'https://ss-sportexpress.cdnvideo.ru/userfiles/videoreports/60/60790.mp4',
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
      ]
    }
  },
  fetch({ store }) {
    const promises = [
      store.dispatch('category/fetchCategories', {
        itemCount: 9,
        pageCount: 0
      }),
      store.dispatch('star/fetchStars', {
        itemCount: 12,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories,
      categoriesLength: state => state.category.length,
      stars: state => state.star.stars,
      starsLength: state => state.star.length
    }),
    getCategoriesLength() {
      return Math.ceil(this.categoriesLength / 9)
    },
    getStarsLength() {
      return Math.ceil(this.starsLength / 12)
    }
  },
  watch: {
    categoryPage(v) {
      this.$store.dispatch('category/fetchCategories', {
        itemCount: 9,
        pageCount: v - 1
      })
    },
    starPage(v) {
      this.$store.dispatch('star/fetchStars', {
        itemCount: 12,
        pageCount: v - 1
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
