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
      :items="stars"
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
        <v-icon
          @click="deleteVideo(item.id)"
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
      store.dispatch('star/fetchStars', {
        itemCount: 9,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  },
  computed: {
    ...mapState({
      stars: state => state.star.stars,
    })
  }
}
</script>
