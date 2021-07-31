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
        <h2>Название видео</h2>
        <div class="text-subtitle-2">Описание:</div>
        <div class="text-body-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae non quaerat natus, dolorem illum voluptatem ducimus ipsum distinctio aliquid dignissimos, fuga harum beatae temporibus rerum? Obcaecati ducimus qui perferendis!</div>
      </div>

      <div class="vide-section--category">
        <div class="text-subtitle-2">Категории:</div>
        <v-chip
          v-for="item in items"
          :key="item.id"
          class="mr-2 my-1"
        >
          {{ item.title }}
        </v-chip>
      </div>

      <div class="video-section--model">
        <div class="text-subtitle-2">Модели:</div>
        <v-row wrap class="ma-0">
          <v-flex
            v-for="n in 5"
            :key="n"
            my-2
            xs6
            sm4
            lg3
            xl2
          >
            <v-card class="mr-2" :to="{ name: 'index' }" ripple>
              <v-card-title>
                Yan Danver
                <v-spacer></v-spacer>
                <v-avatar class="mx-0">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
              </v-card-title>
              <v-card-subtitle>Возраст: 23</v-card-subtitle>
            </v-card>
            <!-- <div class="text-body-2">Имя: Amater</div>
            <div class="text-body-2">Возраст: 23</div>
            <div class="model-image__wrapper">
              <img
                src="https://img-fotki.yandex.ru/get/4702/127908635.210e/0_1edc6c_176757d5_orig.jpg"
                width="100%"
              >
            </div> -->
          </v-flex>
        </v-row>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'teen'
        },
        {
          id: 2,
          title: 'amater'
        },
        {
          id: 3,
          title: 'hard'
        },
        {
          id: 4,
          title: 'blob'
        }
      ]
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
