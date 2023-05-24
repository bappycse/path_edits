// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: [
        "bootstrap/dist/css/bootstrap.css",
        "bootstrap-vue/dist/bootstrap-vue.css",
        "~/assets/main.css"
    ],
});
