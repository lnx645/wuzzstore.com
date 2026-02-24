<script setup lang="ts">
import LoginFormHelp from '@/components/login-form-help.vue';
import LoginButton from '@/components/login-form/login-button.vue';
import Input from '../input.vue';
import Label from '../label.vue';
</script>

<template>
    <form class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
            <Label for="email" class="text-sm font-medium text-gray-700">Email</Label>
            <Input autocomplete="email" type="email" id="email" placeholder="Masukkan email Anda" />
        </div>
        <div class="flex flex-col gap-1">
            <Label for="password" class="text-sm font-medium text-gray-700">Password</Label>
            <Input autocomplete="current-password" type="password" id="password" placeholder="Masukkan password Anda" />
            <LoginFormHelp> Butuh bantuan? </LoginFormHelp>
        </div>
        <div>
            <LoginButton />
        </div>
    </form>
</template>
