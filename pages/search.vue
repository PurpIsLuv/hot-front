<template>
  <section class="page--search">

    <!-- Секция видео -->
    <section v-if="videos && videos.length">
      <h4 class="text-h4 mx-2">New porno</h4>
      <v-row wrap class="my-2 mx-0">
        <v-flex
          v-for="(video) in videos"
          :key="video.id"
          xs12
          sm6
          lg4
          xl3
          px-2
          py-4
        >
          <prn-preview
            :item="video"
          ></prn-preview>
        </v-flex>
      </v-row>
      <v-pagination
        v-if="Number.isInteger(getVideosLength)"
        v-model="videoPage"
        class="my-4"
        color="#ff6060"
        :length="getVideosLength"
      ></v-pagination>
    </section>

    <!-- Секция категорий -->
    <section v-if="categories && categories.length">
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
              :src="$getImage(category.src) || 'https://via.placeholder.com/400'"
              :alt="category.name"
            >
              <v-card-title class="text--shadow">{{ category.name }}</v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-row>
      <v-pagination
        v-if="Number.isInteger(getCategoriesLength)"
        v-model="categoryPage"
        class="my-4"
        color="#ff6060"
        :length="getCategoriesLength"
      ></v-pagination>
    </section>

    <!-- Секция звезд -->
    <section v-if="stars && stars.length">
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
              :src="$getImage(star.src) || 'https://via.placeholder.com/300'"
              :alt="star.name"
            >
              <v-card-title class="text--shadow">{{ star.name }}</v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-row>
      <v-pagination
        v-if="Number.isInteger(getStarsLength)"
        v-model="starPage"
        class="my-4"
        color="#ff6060"
        :length="getStarsLength"
      ></v-pagination>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      categoryPage: 1,
      starPage: 1,
      videoPage: 1,
    }
  },
  fetch({ store, route }) {
    return Promise.all([
      store.dispatch('category/fetchCategories', {
        itemCount: 9,
        pageCount: 0,
        searchString: route.query.value
      }),
      store.dispatch('star/fetchStars', {
        itemCount: 12,
        pageCount: 0,
        searchString: route.query.value
      }),
      store.dispatch('video/fetchVideos', {
        itemCount: 9,
        pageCount: 0,
        searchString: route.query.value
      })
    ])
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories,
      categoriesLength: state => state.category.length,
      stars: state => state.star.stars,
      starsLength: state => state.star.length,
      videos: state => state.video.videos,
      videosLength: state => state.video.length
    }),
    getCategoriesLength() {
      return Math.ceil(this.categoriesLength / 9)
    },
    getStarsLength() {
      return Math.ceil(this.starsLength / 12)
    },
    getVideosLength() {
      return Math.ceil(this.videosLength / 9)
    }
  },
  watch: {
    categoryPage(v) {
      this.$store.dispatch('category/fetchCategories', {
        itemCount: 9,
        pageCount: v - 1,
        searchString: this.$route.query.value
      })
    },
    starPage(v) {
      this.$store.dispatch('star/fetchStars', {
        itemCount: 12,
        pageCount: v - 1,
        searchString: this.$route.query.value
      })
    },
    videoPage(v) {
      this.$store.dispatch('video/fetchVideos', {
        itemCount: 9,
        pageCount: v - 1,
        searchString: this.$route.query.value
      })
    }
  }
}
</script>
