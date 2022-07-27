import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'

// const vuetify = createVuetify(
//
// ) // Replaces new Vuetify(...)

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
