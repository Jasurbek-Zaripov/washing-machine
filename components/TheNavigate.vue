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
                        <li style="--clr:#FFF">
                            <a data-text="&nbsp;Home" href="#home">&nbsp;Home&nbsp;</a>
                        </li>
                        <li style="--clr:#FFF">
                            <a data-text="&nbsp;About" href="#about">&nbsp;About&nbsp;</a>
                        </li>
                        <li style="--clr:#FFF">
                            <a data-text="&nbsp;Contact" href="#contact">&nbsp;Contact&nbsp;</a>
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
    border-radius: 3px;
    transition: 0.4s;
}

.coll:active {
    border: 2px solid white;
    box-shadow: 0px 0px 10px 4px rgb(255 255 255 / 26%)
}

.logo {
    margin: 10px;
}
</style>
