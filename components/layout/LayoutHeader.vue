<template>
  <header class="layout-header">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#ff6060">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style='color: #ff6060;'>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      clipped-left
    >
      <v-app-bar-nav-icon color="#ff6060" @click.stop="drawer = !drawer" />
    </v-app-bar>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-view-list',
          title: 'Категории',
          to: '/category'
        },
        {
          icon: 'mdi-star',
          title: 'Порнозвезды',
          to: '/star'
        }
      ]
    }
  }
}
</script>
