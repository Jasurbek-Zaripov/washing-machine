<template>
    <div>
        <a href="tel://+998999891414" :class="data.mode && 'light-btn'">
            <span> {{ data.name }}</span>
            <i></i>
        </a>
    </div>
</template>

<script setup>
import { event, store, lang } from '@/store/store';
const langs = {
    ru: store.get('ru/problems')[0].btn,
    uz: store.get('uz/problems')[0].btn,
};
let data = ref({
    name: langs.ru,
    mode: false
});
event.on('lang', () => {
    data.value.name = lang.now == 'ru' ? langs.ru : langs.uz;
});
event.on('mode', (bol) => {
    data.value.mode = bol;
});
</script>

<style scoped>
a {
    position: relative;
    background-color: transparent;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 10px 30px;
    transition: 0.4s;
}

.light-btn {
    color: var(--bs-gray-dark) !important;
}

a:active,
a:hover {
    letter-spacing: 0.25em;
    background-color: transparent;
    box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.479);
}

.light-btn:active,
.light-btn:hover {
    box-shadow: 0 0.5rem 7px -0.5px var(--bs-gray-dark) !important;
}

a::before {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: transparent;
}

a span {
    position: relative;
    z-index: 1;
}

a i {
    position: absolute;
    inset: 0;
    display: block;
    border: 2px solid white;
}

.light-btn i {
    border-color: var(--bs-gray-dark) !important;
}


a i::before {
    content: '';
    position: absolute;
    top: -11px;
    left: 100%;
    transform: translateX(0%);
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 2px solid white;
    transition: 0.4s;
}

.light-btn i::before {
    border-color: var(--bs-gray-dark) !important;
}

a:active i::before,
a:hover i::before {
    left: 0%;
    transform: translateX(-46%) rotate(62deg);
    box-shadow: 34px 21px white;
}

.light-btn:active i::before,
.light-btn:hover i::before {
    box-shadow: 34px 21px var(--bs-gray-dark) !important;
}

a i::after {
    content: '';
    position: absolute;
    bottom: -11px;
    left: 0;
    transform: translateX(-100%);
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 2px solid white;
    transition: 0.4s;
}

.light-btn i::after {
    border-color: var(--bs-gray-dark) !important;
}

a:active i::after,
a:hover i::after {
    left: 100%;
    transform: translateX(-46%) rotate(-62deg);
    box-shadow: 34px -21px white;
}

.light-btn:active i::after,
.light-btn:hover i::after {
    box-shadow: 34px -21px var(--bs-gray-dark) !important;
}
</style>