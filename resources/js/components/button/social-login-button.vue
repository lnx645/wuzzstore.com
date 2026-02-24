<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    icon: Component;
    label: string;
}>();
</script>
<template>
    <button
        class="text-muted flex w-full cursor-pointer items-center justify-center space-x-1 rounded border border-stone-300 bg-white p-2 text-sm font-bold text-stone-500 hover:bg-stone-100 disabled:bg-stone-50 disabled:text-stone-300"
    >
        <component :is="icon" width="19" height="18" />
        <p class="tracking-wide">{{ label }}</p>
    </button>
</template>
