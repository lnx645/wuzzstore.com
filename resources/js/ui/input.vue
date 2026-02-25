<script setup lang="ts">
import { computed } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva('w-full rounded-lg border transition outline-none text-sm px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        variant: {
            default: 'border-stone-300 bg-stone-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200',
            error: 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-2 focus:ring-red-100',
            success: 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-2 focus:ring-green-100',
        },
        inputSize: {
            sm: 'py-1.5 px-3 text-xs',
            default: 'py-2 px-4 text-sm',
            lg: 'py-3 px-5 text-base',
        },
    },
    defaultVariants: {
        variant: 'default',
        inputSize: 'default',
    },
});

type InputProps = VariantProps<typeof inputVariants>;

interface Props {
    modelValue?: string | number;
    type?: string;
    variant?: InputProps['variant'];
    inputSize?: InputProps['inputSize'];
    class?: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
});

const emit = defineEmits(['update:modelValue']);

// 3. Gabungkan class menggunakan cn
const classes = computed(() => cn(inputVariants({ variant: props.variant, inputSize: props.inputSize }), props.class));
</script>

<template>
    <input :type="props.type" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :class="classes" />
</template>
