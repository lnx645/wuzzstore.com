<script setup lang="ts">
import SocialLoginButton from '../button/social-login-button.vue';
import GoogleIcon from '../icons/GoogleIcon.vue';
import TiktokIcon from '../icons/TiktokIcon.vue';
import WhatsappIcon from '../icons/WhatsappIcon.vue';
</script>

<template>
    <div class="space-y-3">
        <SocialLoginButton label="Login With Google" :icon="GoogleIcon" />
        <SocialLoginButton label="Login With Tiktok" :icon="TiktokIcon" />
        <SocialLoginButton label="Login With Whatsapp" :icon="WhatsappIcon" />
    </div>
</template>
