import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { logVersion } from "./version";

createApp(App).mount("#app");
logVersion();
