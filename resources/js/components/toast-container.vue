<script setup>
import { useToast } from '@/stores/toast';
import { AnimatePresence, motion } from 'motion-v';

const { toasts, removeToast } = useToast();

const config = {
    success: {
        container: 'bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]',
        iconBg: 'bg-[#4ADE80]',
        icon: 'M5 13l4 4L19 7',
    },
    info: {
        container: 'bg-[#EFF6FF] border-[#DBEAFE] text-[#1E40AF]',
        iconBg: 'bg-[#3B82F6]',
        icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
        container: 'bg-[#FFFBEB] border-[#FEF3C7] text-[#92400E]',
        iconBg: 'bg-[#FBBF24]',
        icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    error: {
        container: 'bg-[#FEF2F2] border-[#FEE2E2] text-[#991B1B]',
        iconBg: 'bg-[#F87171]',
        icon: 'M6 18L18 6M6 6l12 12',
    },
};
</script>

<template>
    <div
        class="user-select-none pointer-events-none fixed right-0 bottom-0 left-0 z-9999 flex w-full flex-col gap-2 lg:top-10 lg:left-1/2 lg:max-w-md lg:-translate-x-1/2 lg:px-2"
    >
        <AnimatePresence>
            <motion.div
                v-for="toast in toasts"
                :key="toast.id"
                layout
                :initial="{ opacity: 0, y: -20, scale: 0.95 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :exit="{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }"
                class="pointer-events-auto w-full"
            >
                <div
                    :class="[
                        config[toast.type].container,
                        'relative flex items-center gap-2 overflow-hidden border p-2 shadow-sm lg:rounded-2xl lg:px-4 lg:py-3',
                    ]"
                >
                    <motion.div
                        :class="[
                            config[toast.type].iconBg,
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm lg:h-10 lg:w-10',
                        ]"
                        :initial="{ scale: 0.5, rotate: -45 }"
                        :animate="{
                            scale: 1,
                            rotate: 0,
                            transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 15,
                                delay: 0.1, // Sedikit delay agar muncul setelah box toast muncul
                            },
                        }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2.5"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" :d="config[toast.type].icon" />
                        </svg>
                    </motion.div>

                    <div class="flex-1 pr-3">
                        <h3 class="text-sm leading-tight font-bold lg:text-base">{{ toast.title }}</h3>
                        <p class="mt-0 pr-2 text-xs opacity-80 lg:pr-4.5 lg:text-sm">{{ toast.message }}</p>
                    </div>

                    <button
                        @click="removeToast(toast.id)"
                        class="absolute top-1/2 right-0 -translate-1/2 text-gray-400 transition-colors hover:text-gray-600 lg:right-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    </div>
</template>
