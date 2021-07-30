import Vue from 'vue'
import PrnVideo from '@/components/common/PrnVideo'

const components = { PrnVideo }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
