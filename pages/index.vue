<template>
  <section class="page--index">

    <!-- Секция видео -->
    <h4 class="text-h4 mx-2">Новое порно видео</h4>
    <v-row wrap class="mt-2 mx-0">
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
    <section>
      <v-pagination
        v-model="page"
        class="my-4"
        color="#ff6060"
        :length="2"
      ></v-pagination>
    </section>

    <!-- Секция категорий -->
    <h4 class="text-h4 mx-2">Категорий</h4>
    <v-row wrap class="mt-2 mx-0">
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
            :src="category.src"
            :alt="category.name"
          >
            <v-card-title>{{ category.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>

    <!-- Секция звезд -->
    <h4 class="text-h4 mx-2 mt-2">Порнозвезды</h4>
    <v-row wrap class="mt-2 mx-0">
      <v-flex
        v-for="n in 12"
        :key="n"
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
          :to="{ name: 'star-id', params: { id: n } }"
        >
          <v-img
            class="white--text align-end"
            width="175"
            height="260"
            src="https://krasivosti.pro/uploads/posts/2021-04/1617953264_22-p-koshki-malenkie-milie-24.jpg"
            alt="Tifany Tattum"
          >
            <v-card-title>Tifany Tattum</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
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
    return store.dispatch('category/fetchCategories')
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  }
}
</script>

<style lang="scss" scoped></style>
