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
    modules: ['nuxt-icon'],
    nuxtIcon: {
        size: '45px', // default <Icon> size applied
        class: 'icon', // default <Icon> class applied
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        }
    }
});
