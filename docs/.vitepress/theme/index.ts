import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

import DsHero from './components/DsHero.vue'
import DsFeatureGrid from './components/DsFeatureGrid.vue'
import DsCardLink from './components/DsCardLink.vue'
import Ds3DLogo from './components/Ds3DLogo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DsHero', DsHero)
    app.component('DsFeatureGrid', DsFeatureGrid)
    app.component('DsCardLink', DsCardLink)
    app.component('Ds3DLogo', Ds3DLogo)
  },
} satisfies Theme
