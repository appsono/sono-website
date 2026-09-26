import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { logVersion } from "./version";
import reveal from "./directives/reveal";

createApp(App).directive("reveal", reveal).mount("#app");
logVersion();
