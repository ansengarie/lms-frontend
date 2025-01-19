import { createApp } from "vue";
import { createPinia } from "pinia"; // Tambahkan ini
// import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

const app = createApp(App);
const pinia = createPinia(); //

app.use(router);
app.use(pinia); // Daftarkan Pinia
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
