import Vue from 'vue'
import PrnPreview from '@/components/common/PrnPreview'

const components = { PrnPreview }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
