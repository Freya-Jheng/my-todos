import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


library.add(faHome,faBars,faSun,faMoon,faMagnifyingGlass,faPlus);


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component("font-awesome-icon", FontAwesomeIcon)
