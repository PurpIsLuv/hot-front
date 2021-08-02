<template>
  <section class="page--star">
    <v-row wrap class="px-2">
      <v-btn
        class="elevation-0 mx-1 my-1"
        :color="letter === '' ? '#ff6060' : 'default'"
        small
        @click.stop="letter = ''"
      >
        <span :style="`color: ${ letter === '' ? '#fff' : '#000'}`">All</span>
      </v-btn>
      <v-btn
        v-for="(char, index) in alphavit"
        :key="index"
        class="elevation-0 mx-1 my-1"
        :color="letter === char ? '#ff6060' : 'default'"
        small
        @click.stop="letter = char"
      >
        <span :style="`color: ${ letter === char ? '#fff' : '#000'}`">{{ char }}</span>
      </v-btn>
    </v-row>
    <v-row wrap>
      <v-flex
        v-for="n in 12"
        :key="n"
        xs12
        sm6
        lg2
        xl3
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
    <section>
      <v-pagination
        v-model="page"
        class="my-4"
        color="#ff6060"
        :length="2"
      ></v-pagination>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      letter: '',
      page: 1
    }
  },
  computed: {
    ...mapState({
      alphavit: state => state.star.alphavit
    })
  }
}
</script>
