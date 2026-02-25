<script setup lang="ts">
import { computed } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva('block font-medium transition-colors select-none', {
    variants: {
        variant: {
            default: 'text-stone-700',
            error: 'text-red-500',
            disabled: 'text-stone-400',
        },
        size: {
            xs: 'text-xs mb-1',
            sm: 'text-sm mb-1',
            default: 'text-sm  mb-1',
            lg: 'text-base  mb-1',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

type LabelProps = VariantProps<typeof labelVariants>;

interface Props {
    for?: string;
    variant?: LabelProps['variant'];
    size?: LabelProps['size'];
    required?: boolean;
    class?: string;
}

const props = defineProps<Props>();

const classes = computed(() => cn(labelVariants({ variant: props.variant, size: props.size }), props.class));
</script>

<template>
    <label :for="props.for" :class="classes">
        <slot />

        <span v-if="required" class="ml-0.5 text-red-500">*</span>
    </label>
</template>
