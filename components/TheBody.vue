<template>
    <div class="container mt-5">
        <h1 class="text-uppercase text-center">Ремонт стиральных машин с выездом на дом</h1>
        <div class="row mt-5">
            <div class="col d-flex align-items-center justify-content-center" v-for="info of store.get('ru').ru"
                :key="info.img">
                <div class="card mb-3" style="max-width: 18rem; min-height: 155px;min-width: 350px;">
                    <div class="card-header"> </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            <div class="col d-flex justify-content-start align-items-start">
                                <img class="logo me-2" :src="info.img" height="25px" alt="">
                                <h5>{{ info.title }}</h5>
                            </div>
                        </h5>
                        <p class="card-text">{{ info.body }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <h3 class="text-center">{{ store.get('ru/2').title }}</h3>
        </div>
    </div>
</template>

<script setup>
import { store } from "@/store/store";
</script>

<style scoped>
hr {
    width: 100%;
    height: 5px;
    color: #ffdd1c;
    opacity: 1;
    -webkit-text-stroke: 1px #ffdd1c;
}

.card {
    background-color: transparent;
    border-color: white;
}
</style>