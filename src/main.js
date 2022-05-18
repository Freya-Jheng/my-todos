import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faBars, faSun, faMoon, faMagnifyingGlass, faPlus, faTag, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faBars, faSun, faMoon, faMagnifyingGlass, faPlus, faTag, faArrowRightFromBracket);

const app = createApp(App)

app.use(router)
app.mount('#app')
app.component("font-awesome-icon", FontAwesomeIcon)
