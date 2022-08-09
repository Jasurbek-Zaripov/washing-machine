<template>
    <div id="head">
        <header class="row shadow px-3 mb-3">
            <div class="col d-flex justify-content-start align-items-center">
                <img class="logo" src="/icons/washing-machine.svg" height="50px" alt="">
                <h1>MASTERIUS</h1>
            </div>
            <div class="col d-flex justify-content-start align-items-center">
                <nav>
                    <ul>
                        <li class="text-nowrap">
                            <a :data-text="'&nbsp;' + data.menu.home" href="#">&nbsp;{{ data.menu.home }}&nbsp;</a>
                        </li>
                        <li class="text-nowrap">
                            <a :data-text="'&nbsp;' + data.menu.about" href="#about">&nbsp;{{ data.menu.about
                            }}&nbsp;</a>
                        </li>
                        <li class="text-nowrap">
                            <a :data-text="'&nbsp;' + data.menu.contact" href="#contact">&nbsp;{{ data.menu.contact
                            }}&nbsp;</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
                <a class="coll" href="tel://+998915905561"><img class="logo" height="25px" style="height: 25px;"
                        src="/icons/call.svg" alt=""></a>
                <h3 class="h1 mx-3">+998 91 590 55 61</h3>
                <div class="ms-2" style="cursor: pointer;" @click="change()">
                    <img height="27px" :src="data.img" alt="">
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
import { lang, store, event } from '@/store/store';
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
#head {
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
    box-shadow: 0px 0px 10px 4px rgb(255 255 255 / 26%)
}

.logo {
    margin: 0;
    padding: 5px;
}
</style>
