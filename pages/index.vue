<template>
  <section class="page--index">
    <v-row wrap>
      <v-flex
        v-for="i in 10"
        :key="i"
        xs12
        sm6
        lg4
        px-2
        py-1
      >
        <v-carousel
          v-model="activeSlide"
          :touch="touchOption"
          continuous
          show-arrows-on-hover
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item
            v-for="n in 5"
            :key="n"
          >
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      touchOption: {
        left: () => this.swipe(1),
        right: () => this.swipe(-1)
      }
    }
  },
  methods: {
    swipe(value) {
      this.activeSlide += value
    }
  }
}
</script>

<style lang="scss" scoped></style>
