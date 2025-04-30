<template>
  <q-card flat bordered>
    <img class="tw-h-56" :src="gif.images.preview_gif.url" :alt="'imagem do item: ' + gif.slug" />

    <p class="tw-text-black text-center tw-mt-3 tw-line-clamp-1">{{ gif.slug }}</p>

    <q-card-actions align="right">
      <q-btn flat @click="addFavorite(gif)" color="red" icon="favorite" />
      <!-- <q-btn flat color="primary" icon="share" /> -->
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { useGifStore } from 'src/stores/gif-store';

export interface GifCardProps {
  gif: any;
}

defineProps<GifCardProps>();

const { addFavorite } = useGifStore();
</script>
