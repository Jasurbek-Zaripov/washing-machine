<template>
    <div class="container mt-5" id="home">
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
        <div class="mt-5">
            <hr>
            <div class="my-5">
                <h3 class="text-center">{{ store.get('ru/2').title }}</h3>
            </div>
            <div class="row">
                <div class="col mb-3" v-for="a of 5" :key="a">
                    <div class="card shadow" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <TheButton name="call now" url="tel://+998915905561" class="mt-5 m-3" />
                        </div>
                    </div>
                </div>
            </div>
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
    color: white;
    opacity: 1;
    -webkit-text-stroke: 1px white;
}

.card {
    background-color: transparent;
    border-color: white;
}
</style>