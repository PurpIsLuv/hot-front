<template>
  <section class="page--star">
    <v-row wrap class="px-2 my-2">
      <v-btn
        class="elevation-0 mx-1 my-1"
        :color="letter === '' ? '#ff6060' : '#fff'"
        small
        @click.stop="letter = ''"
      >
        <span :style="`color: ${ letter === '' ? '#fff' : '#000'}`">All</span>
      </v-btn>
      <v-btn
        v-for="(char, index) in alphavit"
        :key="index"
        class="elevation-0 mx-1 my-1"
        :color="letter === char ? '#ff6060' : '#fff'"
        small
        @click.stop="letter = char"
      >
        <span :style="`color: ${ letter === char ? '#fff' : '#000'}`">{{ char }}</span>
      </v-btn>
    </v-row>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      letter: '',
      starPage: 1
    }
  },
  fetch({ store }) {
    return store.dispatch('star/fetchStars', {
      itemCount: 24,
      pageCount: 0
    })
  },
  computed: {
    ...mapState({
      alphavit: state => state.star.alphavit,
      stars: state => state.star.stars,
      starsLength: state => state.star.length
    }),
    getStarsLength() {
      return Math.ceil(this.starsLength / 24)
    }
  },
  watch: {
    starPage(v) {
      this.$store.dispatch('star/fetchStars', {
        itemCount: 24,
        pageCount: this.starPage - 1,
        searchString: this.letter
      })
    },
    letter(v) {
      this.starPage = 1
      this.$store.dispatch('star/fetchStars', {
        itemCount: 24,
        pageCount: this.starPage - 1,
        searchString: this.letter
      })
    }
  }
}
</script>
