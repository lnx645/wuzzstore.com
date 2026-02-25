<script setup lang="ts">
import AuthLayout from '@/components/auth-layout.vue';
import { Separator } from '@ui/index';
import LoginForm from '@/components/login-form/login-form.vue';
import SocialLogin from '@/components/login-form/social-login.vue';
import { login } from '@/routes';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <AuthLayout>
        <template #title>Daftar Akun ke WuzzStore</template>
        <template #description>
            <p class="text-sm">Sudah punya akun? <Link :href="login()" class="text-orange-500">Masuk</Link></p>
        </template>
        <LoginForm />
        <template #footer>
            <Separator>Atau Daftar dengan</Separator>
            <SocialLogin />
        </template>
    </AuthLayout>
</template>
