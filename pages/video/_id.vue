<template>
  <section class="page--video">
    <v-breadcrumbs
      class="pa-2"
      divider="-"
      :items="getBreadcrumbs"
    ></v-breadcrumbs>
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
          <a
            href="#"
            class="text-caption link--default"
          >
            Original url
          </a>
        </v-row>
        <div class="text-subtitle-2">Description:</div>
        <div class="text-body-2">{{ video.description }}</div>
      </div>

      <div class="video-section--category">
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
        <v-chip
          v-for="star in video.VideoToStars"
          :key="star.id"
          class="mr-2 my-1"
          :to="{ name: 'star-id', params: { id: star.id } }"
          target="_blank"
        >
          {{ star.Star.name }}
        </v-chip>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, route }) {
    return store.dispatch('video/fetchVideo', route.params.id)
  },
  head() {
    return {
      title: this.video.name || 'Video',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.video.description || 'porno video'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [
            ...this.video.VideoToCategories.map(v => v.Category.slug),
            ...this.video.VideoToStars.map(v => v.Star.name)
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      video: state => state.video.video
    }),
    getVideo() {
      return this.video.VideoFiles[0].url
    },
    getBreadcrumbs() {
      return [
        {
          text: 'Video',
          disabled: false,
          href: '/video'
        },
        {
          text: this.video.name,
          disabled: true
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('video/updateStat', this.video.id)
    this.$store.dispatch('star/updateStat', this.video.VideoToStars.map(star => star.Star.id))
    this.$store.dispatch('category/updateStat', this.video.VideoToCategories.map(category => category.Category.id))
  }
}
</script>

<style lang="scss" scoped>
.model-image__wrapper {
  width: 108px;
  height: 142px;
}
</style>
