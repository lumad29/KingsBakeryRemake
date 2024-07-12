/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/store'
import router from '@/router'
import { MotionPlugin } from '@vueuse/motion' // {} named imports

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(MotionPlugin)
}
