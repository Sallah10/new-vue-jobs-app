<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
// In main.js or App.vue
console.log('Env vars:', {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY
});
</script>

<template>
  <Navbar />
  <RouterView />
</template>
