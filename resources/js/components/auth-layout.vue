<script setup lang="ts">
import ChevronLeft from './icons/ChevronLeft.vue';
</script>

<template>
    <div class="sticky top-0 flex h-12 w-full items-center justify-start bg-orange-500 text-white">
        <div class="container mx-auto">
            <div class="text-2xl">
                <ChevronLeft />
            </div>
            <div class="absolute inset-0 flex flex-1 items-center justify-center">
                <h1 class="text-md font-bold lg:text-lg">Login Wuzz</h1>
            </div>
        </div>
    </div>
    <div
        class="mt-4 flex-col items-center justify-center bg-stone-100 bg-cover bg-center bg-no-repeat lg:mt-0 lg:flex lg:max-h-screen lg:min-h-screen"
    >
        <div class="w-full rounded-lg border-stone-200 bg-white p-3 px-5 pb-7 lg:max-w-md lg:border lg:p-6 lg:px-9">
            <div class="mb-3">
                <h1 class="text-start text-lg font-bold">Masuk ke WuzStore</h1>
                <p class="text-sm">Belum punya akun? <a href="/account/register" class="text-orange-500">Daftar</a></p>
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
