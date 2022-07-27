import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// const vuetify = createVuetify(
//
// ) // Replaces new Vuetify(...)

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
    .use(Vue3EasyDataTable)
  .mount('#app')
