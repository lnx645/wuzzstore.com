<script setup lang="ts">
import LoginFormHelp from '@/components/login-form-help.vue';
import LoginButton from '@/components/login-form/login-button.vue';
import { useAuthentication } from '@/composables/useAuth';
import { Input, Label } from '@/ui';
import { Head } from '@inertiajs/vue3';
let { form, processLogin } = useAuthentication();
</script>

<template>
    <Head title="Login">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <form @submit.prevent="processLogin" class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
            <Label for="email" class="text-sm font-medium text-gray-700">Email</Label>
            <Input
                :disabled="form.processing"
                required
                v-model="form.email"
                aria-autocomplete="email"
                autocomplete="email"
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
            />
        </div>
        <div class="flex flex-col gap-1">
            <Label for="password" class="text-sm font-medium text-gray-700">Password</Label>
            <Input
                :disabled="form.processing"
                required
                v-model="form.password"
                autocomplete="current-password"
                type="password"
                id="password"
                placeholder="Masukkan password Anda"
            />
            <LoginFormHelp> Butuh bantuan? </LoginFormHelp>
        </div>
        <div>
            <LoginButton :disabled="form.processing" />
        </div>
    </form>
</template>
