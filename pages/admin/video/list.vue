/* eslint-disable */
<template>
  <section class="admin-video-list">
    <v-data-table
      :headers="headers"
      :items="videos"
      @pagination="(v) => pagination = v"
    >
      <template
        #[`item.actions`]=" { item }"
      >
        <v-icon
          @click="$router.push({ name: 'admin-video-item', params: { item: item.id } })"
        >
          mdi-pencil
        </v-icon>
        <v-icon>mdi-delete</v-icon>
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
          value: 'name',
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
  }
}
</script>
