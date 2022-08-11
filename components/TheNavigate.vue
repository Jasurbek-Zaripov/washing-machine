<template>
    <div class="head" :class="mode && 'light'">
        <header class="row shadow px-3 mb-3" :class="mode && 'light-shadow'">
            <div class="col d-flex justify-content-start align-items-center">
                <img src="/company/dark.png" style="height: 25px;">
            </div>
            <div class="col d-flex justify-content-start align-items-center">
                <nav>
                    <ul>
                        <li class="text-nowrap">
                            <a :class="mode && 'light-color'" :data-text="'&nbsp;' + data.menu.home" href="#">&nbsp;{{
                                    data.menu.home
                            }}&nbsp;</a>
                        </li>
                        <li class="text-nowrap">
                            <a :class="mode && 'light-color'" :data-text="'&nbsp;' + data.menu.about"
                                href="#about">&nbsp;{{ data.menu.about
                                }}&nbsp;</a>
                        </li>
                        <li class="text-nowrap">
                            <a :class="mode && 'light-color'" :data-text="'&nbsp;' + data.menu.contact"
                                href="#contact">&nbsp;{{ data.menu.contact
                                }}&nbsp;</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
                <a class="coll" :class="mode && 'light-coll'" href="tel://+998999891414"><img class="logo"
                        :class="mode ? 'light-logo' : ''" height="25px" style="height: 25px;" src="/icons/call.svg"
                        alt=""></a>
                <h3 class="h1 mx-3">+998 99 989 14 14</h3>
                <div class="ms-2" style="cursor: pointer;" @click="change()">
                    <img height="27px" :src="data.img" alt="">
                </div>
                <div>
                    <TheMode />
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
import { lang, store, event } from '@/store/store';
let mode = ref(false);
event.on('mode', (data) => {
    mode.value = data;
    useHead({
        bodyAttrs: {
            class: data ? 'light' : ''
        }
    });
});
let data = ref({
    menu: store.get('ru/menu'),
    img: store.get('ru/lang')
});
function change() {
    lang.now = lang.now == 'ru' ? 'uz' : 'ru';
    data.value.img = lang.now == 'ru' ? store.get('ru/lang') : store.get('uz/lang');
    data.value.menu = lang.now == 'ru' ? store.get('ru/menu') : store.get('uz/menu');
    event.emit('lang');
}
</script>

<style scoped>
.head {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: var(--bs-gray-dark);
}

.h1 {
    text-align: center;
    vertical-align: middle;
    user-select: all;
    font-size: 1.5rem;
}

.coll {
    text-align: center;
    vertical-align: middle;
    border: 2px solid white;
    border-radius: 3px;
    transition: 0.4s;
}

.coll:active,
.coll:hover {
    border: 2px solid white;
    box-shadow: 0 0 7px 2px rgb(255 255 255 / 71%);
}

.light-coll {
    border-color: var(--bs-gray-dark) !important;
}

.light-coll:active,
.light-coll:hover {
    border-color: var(--bs-gray-dark) !important;
    box-shadow: 0 0.5rem 7px -0.5px var(--bs-gray-dark) !important;
}

.logo {
    margin: 0;
    padding: 5px;
}
</style>
