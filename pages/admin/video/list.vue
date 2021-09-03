/* eslint-disable */
<template>
  <section class="admin-video-list">
    <v-row class="my-2 mx-0">
      <v-spacer></v-spacer>
      <v-btn
        @click="$router.push({ name: 'admin-video-item', params: { item: '0' } })"
      >Создать</v-btn>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="videos"
      @pagination="(v) => pagination = v"
    >
      <template
        #[`item.actions`]=" { item }"
      >
        <v-icon
          @click="$router.push({ name: 'admin-video-item', params: { item: item.Video.id } })"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          @click="deleteVideo(item.Video.id)"
        >mdi-delete</v-icon>
      </template>
    </v-data-table>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      headers: [
        {
          text: 'Название',
          sortable: false,
          value: 'Video.name',
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false
        }
      ],
      pagination: {
        itemsLength: 0,
        itemsPerPage: 0,
        page: 0,
        pageCount: 0,
        pageStart: 0,
        pageStop: 0
      }
    }
  },
  fetch({ store }) {
    const promises = [
      store.dispatch('video/fetchVideos', {
        itemCount: 9,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  },
  computed: {
    ...mapState({
      videos: state => state.video.videos,
    })
  },
  methods: {
    async deleteVideo(id) {
      try {
        await this.$store.dispatch('video/deleteVideo', id)
        await this.$store.dispatch('video/fetchVideos', {
          itemCount: 9,
          pageCount: 0
        })
      } catch (error) {
        
      }
    }
  }
}
</script>
