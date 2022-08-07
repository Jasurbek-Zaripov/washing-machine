<template>
    <div>
        <header class="row shadow px-3 mb-3">
            <div class="col d-flex justify-content-start align-items-center">
                <img class="logo" src="/icons/washing-machine.svg" height="50px" alt="">
                <h1>MASTERIUS</h1>
            </div>
            <div class="col">
                <nav>
                    <ul>
                        <li style="--clr:#00ade1">
                            <NuxtLink data-text="&nbsp;Home" to="/">&nbsp;Home&nbsp;</NuxtLink>
                        </li>
                        <li style="--clr:#ffdd1c">
                            <NuxtLink data-text="&nbsp;About" to="/about">&nbsp;About&nbsp;</NuxtLink>
                        </li>
                        <li style="--clr:#00dc82">
                            <NuxtLink data-text="&nbsp;Contact" to="/contact">&nbsp;Contact&nbsp;</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col d-flex align-items-center">
                <h1 class="h1">
                    <a class="coll" href="tel://+998915905561"><img class="logo mx-2" height="35px"
                            src="/icons/call.svg" alt=""></a>+998 91 590 55 61
                </h1>
            </div>
        </header>
    </div>
</template>

<style scoped>
.h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.coll {
    text-align: center;
    vertical-align: middle;
    border: 2px solid white;
    border-radius: 5px;
}

.coll:hover {
    border: 2px solid white;
    border-radius: 10px;
}

.logo {
    margin: 10px;
}
</style>
