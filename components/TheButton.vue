<template>
    <div>
        <a :href="url || '#'">
            <span> {{ name }}</span>
            <i></i>
        </a>
    </div>
</template>

<script>
export default {
    props: ['name', 'url']
};
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

a:active,
a:hover {
    letter-spacing: 0.25em;
    background-color: transparent;
    box-shadow: 0 0 35px white;
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

a:active i::before,
a:hover i::before {
    left: 0%;
    transform: translateX(-46%) rotate(62deg);
    box-shadow: 34px 21px white;
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

a:active i::after,
a:hover i::after {
    left: 100%;
    transform: translateX(-46%) rotate(-62deg);
    box-shadow: 34px -21px white;
}
</style>