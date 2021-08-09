<template>
  <section class="page--video">
    <client-only placeholder="Loading...">
      <section class="video__wrapper">
        <vue-core-video-player
          :src="video.VideoFiles.map(({ resolution, url }) => { return { resolution, src: url } })"
          :autoplay="false"
        ></vue-core-video-player>
      </section>
    </client-only>
    <section>
      <div class="video-section--main">
        <v-row class="ma-0" align="center">
          <h2>{{ video.name }}</h2>
          <v-spacer></v-spacer>
          <a href="#" class="text-caption link--default">Original url</a>
        </v-row>
        <div class="text-subtitle-2">Description:</div>
        <div class="text-body-2">{{ video.description }}</div>
      </div>

      <div class="vide-section--category">
        <div class="text-subtitle-2">Categories:</div>
        <v-chip
          v-for="category in video.VideoToCategories"
          :key="category.id"
          class="mr-2 my-1"
          :to="{ name: 'category-slug', params: { slug: category.Category.slug } }"
          target="_blank"
        >
          {{ category.Category.name }}
        </v-chip>
      </div>

      <div class="video-section--model">
        <div class="text-subtitle-2">Pornstars:</div>
        <v-row wrap class="ma-0">
          <v-flex
            v-for="star in video.VideoToStars"
            :key="star.id"
            my-2
            xs6
            sm4
            lg3
            xl2
          >
            <v-card class="mr-2" :to="{ name: 'star-id', params: { id: star.id } }" ripple>
              <v-card-title class="text--shadow">
                {{ star.Star.name }}
                <v-spacer></v-spacer>
                <v-avatar class="mx-0">
                  <v-img
                    :src="star.Star.src || 'https://via.placeholder.com/400'"
                    :alt="star.Star.name || video.name || ''"
                  ></v-img>
                </v-avatar>
              </v-card-title>
              <v-card-subtitle>Age: {{ star.Star.age }}</v-card-subtitle>
            </v-card>
          </v-flex>
        </v-row>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, route }) {
    return store.dispatch('video/fetchVideo', route.query.id)
  },
  computed: {
    ...mapState({
      video: state => state.video.video
    }),
    getVideo() {
      return this.video.VideoFiles[0].url
    }
  }
}
</script>

<style lang="scss" scoped>
.model-image__wrapper {
  width: 108px;
  height: 142px;
}
</style>
