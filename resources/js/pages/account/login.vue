<script setup lang="ts">
import AuthLayout from '@/components/auth-layout.vue';
import InlineSeparator from '@/components/inline-separator.vue';
import LoginForm from '@/components/login-form/login-form.vue';
import SocialLogin from '@/components/login-form/social-login.vue';
</script>

<template>
    <AuthLayout>
        <LoginForm />
        <template #footer>
            <InlineSeparator>Atau masuk dengan</InlineSeparator>
            <SocialLogin />
        </template>
    </AuthLayout>
</template>
