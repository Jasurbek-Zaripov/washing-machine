<template>
    <div>
        <label class="p-3">
            <input class='toggle-checkbox' type='checkbox' @change="mode" checked />
            <div class='toggle-slot'>
                <div class='sun-icon-wrapper'>
                    <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div class='moon-icon-wrapper'>
                    <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
            </div>
        </label>

    </div>
</template>
<script setup>
import { event } from '@/store/store';
function mode(eve) {
    const val = eve.target.checked;
    event.emit('mode', val);
}
</script>
<style scoped>
.toggle-slot {
    position: relative;
}

.toggle-checkbox {
    opacity: 0;
}

.sun-icon {
    position: absolute;
    height: 20px;
    width: 20px;
    color: #ffbb52;
}

.sun-icon-wrapper {
    position: absolute;
    top: -21px;
    left: 0;
    height: 20px;
    width: 20px;
    opacity: 0;
    transform: rotate(15deg);
    transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2, .46, .71);
}

.sun-icon-wrapper::after {
    content: 'sun';
    position: absolute;
    top: -4px;
    left: 24px;
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 1;
    transform: rotate(0deg);
}

.moon-icon {
    position: absolute;
    height: 20px;
    width: 20px;
    color: white;
}

.moon-icon-wrapper {
    position: absolute;
    top: -21px;
    left: 0;
    height: 10px;
    width: 20px;
    opacity: 1;
    transform: rotate(0deg);
    transition: opacity 150ms, transform 500ms cubic-bezier(.26, 2.5, .46, .71);
}

.moon-icon-wrapper::after {
    content: 'moon';
    position: absolute;
    top: -4px;
    left: 24px;
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 0;
    transform: rotate(-15deg);
}
</style>