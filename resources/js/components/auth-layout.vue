<script setup lang="ts">
import ChevronLeft from './icons/ChevronLeft.vue';
</script>

<template>
    <div class="sticky top-0 flex h-12 w-full items-center justify-start shadow-md lg:bg-orange-500 lg:text-white">
        <div class="container mx-auto flex items-center justify-start">
            <button class="h-full p-2 text-2xl text-stone-500 hover:text-stone-700 active:text-stone-700 lg:hidden">
                <ChevronLeft />
            </button>
            <div class="absolute inset-0 flex flex-1 items-center lg:justify-center">
                <h1 class="text-md ml-13 font-bold lg:ml-0 lg:text-lg">Login Wuzz</h1>
            </div>
        </div>
    </div>
    <div
        class="mt-3 flex-col items-center justify-center bg-stone-100 bg-cover bg-center bg-no-repeat lg:mt-0 lg:flex lg:max-h-screen lg:min-h-screen"
    >
        <div class="w-full rounded-lg border-stone-200 bg-white p-3 px-5 pb-7 lg:max-w-md lg:border lg:p-6 lg:px-9">
            <div class="mb-3">
                <h1 class="text-start text-lg font-bold">
                    <slot name="title" />
                </h1>
                <slot name="description" />
            </div>
            <slot />
            <slot name="footer" />
        </div>
    </div>
</template>
<style>
.bg {
    background-image: url('../assets/img/bg.image');
}
</style>
