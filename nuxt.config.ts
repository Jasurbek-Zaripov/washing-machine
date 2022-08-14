import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            script: [
                { src: 'https://code.iconify.design/1/1.0.4/iconify.min.js' },
            ],
            title: 'Master stiral',
            link: [
                {
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                    rel: 'stylesheet',
                    integrity:
                        'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: '/style/style.css',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png',
                },
            ],
            meta: [
                { charset: 'UTF-8' },
                {
                    name: 'keywords',
                    content:
                        'ремонт, ремонт стиральных, ремонт стиральных машин, ремонт стиральных машин в Ташкенте, в Ташкенте, стиральных машин, ремонт техники, услуги мастеров, установка стиральный машина, району ташкента',
                },
                { name: 'author', content: 'J Z' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0',
                },
                {
                    'http-equiv': 'content-type',
                    content: 'text/html;charset=UTF-8',
                },
                {
                    'http-equiv': 'Content-Type',
                    content: 'text/html; charset=UTF-8',
                },
                {
                    name: 'description',
                    content: 'ремонт стиральных машин в Ташкенте',
                },
                { property: 'og:locale', content: 'ru_RU' },
                { property: 'og:type', content: 'website' },
                {
                    property: 'og:title',
                    content:
                        'Master stiral - ремонт стиральных машин в Ташкенте',
                },
                {
                    property: 'og:description',
                    content: 'ремонт стиральных машин в Ташкенте',
                },
                { property: 'og:url', content: 'http://master-stiral.uz/' },
                { property: 'og:site_name', content: 'Master stiral' },
                { property: 'og:image', content: '/favicon.png' },
                { name: 'twitter:image', content: '/favicon.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    name: 'twitter:description',
                    content: 'ремонт стиральных машин в Ташкенте',
                },
                {
                    name: 'twitter:title',
                    content:
                        'Master stiral - ремонт стиральных машин в Ташкенте',
                },
                {
                    'http-equiv': 'origin-trial',
                    content:
                        'A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
                },
                { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            ],
        },
    },
});
