import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            script: [
                { src: "https://code.iconify.design/1/1.0.4/iconify.min.js" }
            ],
            title: 'Master stiral',
            link: [
                {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                    crossorigin: "anonymous"
                },
                {
                    rel: "stylesheet",
                    href: '/style/style.css'
                },
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon.png"
                }
            ]
        }
    }
});
