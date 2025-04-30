<template>
  <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
    <h2 class="tw-text-3xl tw-font-semibold">Favoritos</h2>
    <q-badge color="red" align="middle" class="tw-text-base"> Total: {{ totalFavorites }} </q-badge>
  </div>

  <section class="tw-container tw-bg-white tw-min-h-screen tw-p-10">
    <div
      v-if="favorites.length"
      class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-6"
    >
      <FavoriteCard v-for="item in favorites" :key="item.id" :gif="item" />
    </div>

    <div v-else class="tw-text-gray-500">Nenhum gif adicionado aos favoritos.</div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGifStore } from 'src/stores/gif-store';
import FavoriteCard from 'src/components/FavoriteCard.vue';

const store = useGifStore();
const { favorites, totalFavorites } = storeToRefs(store);
</script>
