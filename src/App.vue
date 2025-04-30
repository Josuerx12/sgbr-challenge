<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGifStore } from './stores/gif-store';

onMounted(() => {
  const { loadFavoritesFromStorage } = useGifStore();

  loadFavoritesFromStorage();
});
</script>
