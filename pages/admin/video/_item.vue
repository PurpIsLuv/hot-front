<template>
  <section class="admin-video-item">
    <v-card>
      <v-card-title>
        {{ isEdit ? 'Изменить' : 'Создать'}}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="form">
          <v-row wrap class="my-2 mx-0">
            <v-flex xs12 xl6 pa-2>
              <v-text-field
                v-model="name"
                label="Название"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 xl6 pa-2>
              <v-text-field
                v-model="originalUrl"
                label="Оригинальная ссылка"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 xl6 pa-2>
              <v-autocomplete
                v-model="currentCategories"
                label="Категории"
                :items="getCategoryList"
                item-value="id"
                item-text="name"
                multiple
                chips
                small-chips
                deletable-chips
                return-object
                :search-input.sync="categorySearch"
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 xl6 pa-2>
              <v-autocomplete
                v-model="currentStars"
                label="Порнозвезды"
                :items="getStarList"
                item-value="id"
                item-text="name"
                multiple
                chips
                small-chips
                deletable-chips
                return-object
                :search-input.sync="starSearch"
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 pa-2>
              <v-textarea
                v-model="description"
                label="Описание"
              ></v-textarea>
            </v-flex>
            <v-flex xs12 pa-2>
              <input
                ref="imageUpload"
                type="file"
                multiple
                name="images"
                accept="image/*"
                class="d-none"
                @change="onChange"
              >
              <v-btn
                color="default"
                class="text-none"
                depressed
                :loading="imageLoading"
                @click="$refs.imageUpload.click()"
              >
                <v-icon left>mdi-cloud-upload</v-icon>
                <span>Загрузить фото</span>
              </v-btn>
            </v-flex>
            <v-flex
              v-if="video.VideoPhotos"
              xs12
              pa-2
              class="video-thumbnails"
            >
              <draggable
                :value="video.VideoPhotos"
                @input="(v) => $store.commit('video/ADD_IMAGES', v)"
              >
                <v-card
                  v-for="(image, index) in video.VideoPhotos"
                  :key="index"
                  elevation="0"
                  class="video-thumbnails__item"
                >
                  <v-row class="my-2 mx-0">
                    <v-flex
                      sm12
                      class="d-flex align-center justify-center"
                    >
                      <div>
                        <v-img
                          :src="$getImage(image.url)"
                          width="500"
                        ></v-img>
                      </div>
                    </v-flex>
                    <v-btn
                      small
                      class="thumbnail__delete"
                      @click="deleteImage(index)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </v-card>
              </draggable>
            </v-flex>
            <v-flex xs12 pa-2>
              <v-btn
                color="default"
                class="text-none"
                depressed
                @click="addVideo"
              >
                <v-icon left>mdi-cloud-upload</v-icon>
                <span>Загрузить видео</span>
              </v-btn>
            </v-flex>
            <v-flex
              v-for="(video, index) in video.VideoFiles" :key="index"
              xs12
              pa-2
            >
              <v-row
                class="my-2 mx-0"
              >
                <v-flex sm5 class="pr-1">
                  <v-text-field
                    :value="video.url"
                    label="URL"
                    @input="(value) => $store.commit('video/SET_VIDEO_URL', { index, value })"
                    @change="(value) => onChangeUrl(index, value)"
                  ></v-text-field>
                </v-flex>
                <v-flex sm5 class="px-1">
                  <v-select
                    :value="video.resolution"
                    :items="['240', '360', '480', '720', '1080']"
                    @input="(value) => $store.commit('video/SET_VIDEO_RESOLUTION', { index, value })"
                  ></v-select>
                </v-flex>
                <v-flex sm2 class="px-1">
                  <v-btn
                    @click="deleteVideoUrl(index)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-flex>
              </v-row>
            </v-flex>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          @click="sendForm"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  async asyncData({ route, store }) {
    await store.dispatch('category/fetchCategories', {})
    await store.dispatch('star/fetchStars', {})

    if (route.params.item !== '0') {
      const videoResponse = await store.dispatch('video/fetchVideo', route.params.item)
      const currentCategories = videoResponse.data.VideoToCategories.map((category) => {
        return {
          id: category.id,
          ...category.Category
        }
      })
      store.commit('category/ADD_CATEGORIES', currentCategories)
      const currentStars = videoResponse.data.VideoToStars.map((star) => {
        return {
          id: star.id,
          ...star.Star
        }
      })
      store.commit('star/ADD_STARS', currentStars)

      return {
        ...videoResponse.data,
        currentCategories,
        currentStars
      }
    } else {
      return {
        name: '',
        originalUrl: '',
        description: '',
        currentCategories: [],
        currentStars: [],
        VideoPhotos: [],
        VideoFiles: []
      }
    }
  },
  data() {
    return {
      categorySearch: null,
      starSearch: null,
      imageLoading: false,
      videoLoading: false
    }
  },
  computed: {
    ...mapState({
      video: state => state.video.video,
      stars: state => state.star.stars,
      categories: state => state.category.categories,
    }),
    isEdit() {
      return this.$route.params.item !== '0'
    },
    getCategoryList() {
      return [...this.categories, ...this.currentCategories]
    },
    getStarList() {
      return [...this.stars, ...this.currentStars]
    }
  },
  watch: {
    categorySearch(v) {
      this.$store.dispatch('category/fetchCategories', {
        searchString: v || undefined
      })
    },
    starSearch(v) {
      this.$store.dispatch('star/fetchStars', {
        searchString: v || undefined
      })
    }
  },
  methods: {
    async onImageChanged(image) {
      this.imageLoading = true
      const formData = new FormData()
      formData.append('file', image)
      let result

      try {
        const response = await this.$axios.post('api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        this.$store.commit('video/ADD_IMAGE', {
          url: response.data.url
        })

        result = true
      } catch (error) {
        this.imageLoading = false
        result = false
      }

      this.imageLoading = false
      formData.delete('file')

      return result
    },
    deleteImage(index) {
      this.$store.commit('video/DELETE_IMAGE', index)
    },
    deleteVideoUrl(index) {
      this.$store.commit('video/DELETE_VIDEO_URL', index)
    },
    addVideo() {
      this.$store.commit('video/ADD_VIDEO')
    },
    async onChangeUrl(index, value) {
      if (value && (value.includes('https') || value.includes('http'))) {
        try {
          const response = await this.$http({
            method: 'post',
            url: 'api/upload/link',
            data: {
              url: value
            }
          })

          this.$store.commit('video/SET_VIDEO_URL', { index, value: response.data.url })
        } catch (error) {
          this.$store.commit('video/SET_VIDEO_URL', { index, value: '' })
        }
      }
    },
    async sendForm() {
      const payload = {
        id: this.id,
        name: this.name,
        originalUrl: this.originalUrl,
        description: this.description,
        photos: this.video.VideoPhotos,
        categories: this.currentCategories.map((category) => {
          return {
            categoryId: category.id
          }
        }),
        stars: this.currentStars.map((star) => {
          return {
            starId: star.id
          }
        }),
        urls: this.video.VideoFiles
      }

      try {
        if (this.isEdit) {
          await this.$store.dispatch('video/updateVideo', payload)
        } else {
          await this.$store.dispatch('video/createVideo', payload)
        }
        this.$router.push({ name: 'admin-video-list' })
      } catch (error) {
        console.error(error)
      }
    },
    onChange(e) {
      const images = [...e.target.files]
      const promises = images.map(image => this.onImageChanged(image))
      Promise.all(promises)
    }
  }
}
</script>

<style lang="scss">
.video-thumbnails {
  &__item {
    position: relative;
  }
}
.thumbnail__delete {
  position: absolute;
  right: 0px;
}
</style>
