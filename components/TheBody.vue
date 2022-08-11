<template>
    <div class="container mt-5">
        <h1 class="text-uppercase text-center">{{ data.title }}</h1>
        <div class="row mt-5">
            <div class="col d-flex align-items-center justify-content-center" v-for="info of data.items"
                :key="info.img">
                <div class="card mb-5 border-color" style="max-width: 18rem; min-height: 155px;min-width: 350px;">
                    <div class="card-header"> </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            <div class="col d-flex justify-content-start align-items-start">
                                <img class="logo me-2" :src="info.img" style="height: 25px;" alt="">
                                <h5>{{ info.title }}</h5>
                            </div>
                        </h5>
                        <p class="card-text">{{ info.body }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <hr>
            <div class="my-5">
                <h3 class="text-center">{{ data.item }}</h3>
            </div>
            <div class="row">
                <div class="col mb-5" v-for="(problem, index) of data.problems" :key="index">
                    <div class="card shadow" style="width: 18rem;">
                        <img :src="problem.img" style="width: 286px;height: 203px;" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" style="height: 3rem; overflow-y: hidden;">{{ problem.title }}</h5>
                            <p class="card-text" style="height: 8rem; overflow-y: hidden;">{{ problem.body }}</p>
                            <TheButton style="margin: 2rem auto 0.6rem auto;width: fit-content;" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" class="mb-5"></div>
        </div>
        <div>
            <h3 class="text-center">{{ data.price.title }}</h3>
            <div class="row">
                <div class="col bb d-flex align-items-center justify-content-between px-5 py-3 m-2 text-nowrap"
                    v-for="(price, idx) of data.price.items" :key="idx">
                    <span class="d-inline-block"><b>{{ price.name }}</b></span>
                    <span class="d-inline-block ps-3">{{ price.price }}</span>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="text-center mb-5">{{ data.steps.title }}</h3>
            <div class="d-flex justify-content-between" style="flex-wrap: wrap;">
                <div class="step-body shadow" v-for="(step, idx) of data.steps.items" :key="idx">
                    <div class="w-50 p-3">
                        <h1>{{ '0' + (idx + 1) }}</h1>
                        <h3 class="text-uppercase">{{ step.name }}</h3>
                        <p>{{ step.body }}</p>
                    </div>
                    <div class="step-img" :style="'background-image: url(' + step.img + ');'"></div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="text-center">{{ data.logo.title }}</h3>
            <div class="d-flex align-items-center justify-content-center" style="flex-wrap: wrap;">
                <img v-for="logo of data.logo.items" class="m-2 p-2 shadow"
                    style="height: 50px; background-color: white; border:2px solid white;border-radius: 5px;"
                    :key="logo" :src="logo" alt="">
            </div>
            <div id="contact"></div>
        </div>
        <div class="mt-5 row" style="flex-direction: column-reverse;">
            <div class="col google-maps mt-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7106757177926!2d69.31897395119698!3d41.31515730833051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef530d9035537%3A0xf1fc85384c4133a7!2sTenge%20Bank!5e0!3m2!1sru!2s!4v1660135169517!5m2!1sru!2s"
                    width="100%" height="100%" style="border:0; border-radius: 5px; min-height: 25rem;"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col">
                <div class="d-flex align-items-center justify-content-center mb-2">
                    <img :src="data.info.img" style="height: 30px;" alt="" class="logo me-2">
                    <h3 class="text-uppercase m-0">{{ data.info.title }}</h3>
                </div>
                <p>{{ data.info.body1 }}</p>
                <p><b>{{ data.info.body2 }}</b></p>
                <p><b>{{ data.info.body3 }}</b></p>
                <h4><b><u>{{ data.info.body4 }}</u></b></h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store, event, lang } from "@/store/store";
let mode = ref(true);
event.on('mode', (data) => {
    mode.value = data;
});
let data = ref({});
const init = () => {
    if (lang.now == 'ru') {
        data.value.items = store.get('ru');
        data.value.item = store.get('ru/2');
        data.value.title = store.get('ru/title');
        data.value.problems = store.get('ru/problems');
        data.value.price = store.get('ru/price');
        data.value.steps = store.get('ru/step');
        data.value.logo = store.get('ru/logo');
        data.value.info = store.get('ru/info');
    } else {
        data.value.items = store.get('uz');
        data.value.item = store.get('uz/2');
        data.value.title = store.get('uz/title');
        data.value.problems = store.get('uz/problems');
        data.value.price = store.get('uz/price');
        data.value.steps = store.get('uz/step');
        data.value.logo = store.get('uz/logo');
        data.value.info = store.get('uz/info');
    }
};
init();
event.on('lang', init);
</script>

<style scoped>
.step-body {
    margin-bottom: 3rem;
    border-radius: 3px;
    display: flex;
    position: relative;
    height: 300px;
    width: 48%;
    background-color: #ffffffa1;
    color: black;
}

.step-img {
    width: 50%;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: bottom;
    -webkit-background-size: contain;
    background-size: contain;
    /* position: absolute; */
    /* height: 100%; */
    right: 0;
    top: -40px;
    bottom: 0;
}

.bb {
    border-radius: 3px;
    border: 1px solid var(--bs-orange);
    border-bottom: 2px solid var(--bs-orange);
}

hr {
    width: 100%;
    height: 5px;
    color: var(--bs-orange);
    -webkit-text-stroke: 1px var(--bs-orange);
    opacity: 1;
}

.card {
    background-color: transparent;
    margin: auto;
}
</style>