<template>
  <section class="page--video">
    <client-only placeholder="Loading...">
      <section class="video__wrapper">
        <vue-core-video-player
          src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4"
          :autoplay="false"
        ></vue-core-video-player>
      </section>
    </client-only>
    <section>
      <div class="video-section--main">
        <v-row class="ma-0" align="center">
          <h2>{{ video.name }}</h2>
          <v-spacer></v-spacer>
          <a href="#" class="text-caption link--default">Ссылка на оригинал</a>
        </v-row>
        <div class="text-subtitle-2">Описание:</div>
        <div class="text-body-2">{{ video.description }}</div>
      </div>

      <div class="vide-section--category">
        <div class="text-subtitle-2">Категории:</div>
        <v-chip
          v-for="category in video.VideoToCategories"
          :key="category.id"
          class="mr-2 my-1"
        >
          {{ category.Category.name }}
        </v-chip>
      </div>

      <div class="video-section--model">
        <div class="text-subtitle-2">Модели:</div>
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
              <v-card-title>
                {{ star.Star.name }}
                <v-spacer></v-spacer>
                <v-avatar class="mx-0">
                  <img
                    :src="star.Star.url || 'https://via.placeholder.com/400'"
                    :alt="star.Star.name"
                  >
                </v-avatar>
              </v-card-title>
              <v-card-subtitle>Возраст: {{ star.Star.age }}</v-card-subtitle>
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
