import './assets/scss/normalize.scss'
import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
