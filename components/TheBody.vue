<template>
    <div class="container mt-5">
        <h1 class="text-uppercase text-center">{{ data.title }}</h1>
        <div class="row mt-5">
            <div class="col d-flex align-items-center justify-content-center" v-for="info of data.items"
                :key="info.img">
                <div class="card mb-5" style="max-width: 18rem; min-height: 155px;min-width: 350px;">
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
                        <img :src="problem.img" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" style="height: 3rem; overflow-y: hidden;">{{ problem.title }}</h5>
                            <p class="card-text" style="height: 8rem; overflow-y: hidden;">{{ problem.body }}</p>
                            <TheButton :name="problem.btn" url="tel://+998915905561"
                                style="margin: 2rem auto 0.6rem auto;width: fit-content;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="text-center">{{ data.price.title }}</h3>
            <div class="row">
                <div class="col bb d-flex align-items-center justify-content-between px-5 py-3 m-2 text-nowrap"
                    v-for="(price, idx) of data.price.items" :key="idx">
                    <span class="d-inline-block"><b>{{ price.name }}</b></span> <span
                        class="d-inline-block ps-3">{{ price.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store, event, lang } from "@/store/store";
let data = ref({});
const init = () => {
    if (lang.now == 'ru') {
        data.value.items = store.get('ru');
        data.value.item = store.get('ru/2');
        data.value.title = store.get('ru/title');
        data.value.problems = store.get('ru/problems');
        data.value.price = store.get('ru/price');
    } else {
        data.value.items = store.get('uz');
        data.value.item = store.get('uz/2');
        data.value.title = store.get('uz/title');
        data.value.problems = store.get('uz/problems');
        data.value.price = store.get('uz/price');
    }
};
init();
event.on('lang', init);
</script>

<style scoped>
.bb {
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-bottom: 2px solid white;
}

hr {
    width: 100%;
    height: 5px;
    color: white;
    opacity: 1;
    -webkit-text-stroke: 1px white;
}

.card {
    background-color: transparent;
    border-color: white;
    margin: auto;
}
</style>