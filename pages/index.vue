<template>
  <section class="page--index">
    <h4 class="text-h4 mx-2">Новое порно видео</h4>
    <v-row wrap class="mt-2 mx-0">
      <v-flex
        v-for="(item) in items"
        :key="item.id"
        xs12
        sm6
        lg4
        xl3
        pa-2
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
        :length="15"
      ></v-pagination>
    </section>
  </section>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped></style>
