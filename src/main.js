import { createApp } from "vue";
import { createPinia } from "pinia"; // Tambahkan ini
// import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);
const pinia = createPinia(); //

app.use(router);
app.use(pinia); // Daftarkan Pinia
app.mount("#app");
