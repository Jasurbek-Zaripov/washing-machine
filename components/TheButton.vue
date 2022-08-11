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
    background-color: white;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    text-decoration: none;
    color: white;
}

.light-btn {
    color: var(--bs-orange);
    background-color: var(--bs-orange);
}

a:hover {
    letter-spacing: 0.25em;
    background-color: white;
    color: white;
    box-shadow: 0 0.5em 7px -0.5px white;
}

.light-btn:hover {
    background-color: var(--bs-orange);
    color: var(--bs-orange);
    box-shadow: 0 0.5em 7px -0.5px var(--bs-orange);
}

a::before {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: var(--bs-gray-dark);
}

.light-btn::before {
    background-color: white;
}

a span {
    position: relative;
    z-index: 1;
}

a i {
    position: absolute;
    inset: 0;
    display: block;
}

a i::before {
    content: '';
    position: absolute;
    top: -2.5px;
    left: 80%;
    width: 14px;
    height: 7px;
    border: 2px solid white;
    background-color: var(--bs-gray-dark);
    transform: translateX(-50%);
    transition: 0.5s;
}

.light-btn i::before {
    border-color: var(--bs-orange);
    background-color: white;
}

a:hover i::before {
    width: 20px;
    left: 20%;
}

a i::after {
    content: '';
    left: 20%;
    bottom: -1.5px;
    width: 14px;
    height: 7px;
    position: absolute;
    border: 2px solid white;
    background-color: #27282c;
    transform: translateX(-50%);
    transition: 0.5s;
}

.light-btn i::after {
    border-color: var(--bs-orange);
    background-color: white;
}

a:hover i::after {
    width: 20px;
    left: 80%;
}
</style>