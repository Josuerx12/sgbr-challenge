<template>
  <h2 class="tw-text-3xl tw-font-semibold tw-mb-6">Página Inicial</h2>

  <section class="tw-bg-white tw-min-h-screen tw-p-10">
    <div
      v-if="trendings && trendings.length"
      class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-6"
    >
      <GifCard v-for="item of trendings" :key="item.id" :gif="item" />
    </div>

    <div v-else>
      <p>Nenhum gif encontrado!</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGifStore } from 'src/stores/gif-store';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import GifCard from 'src/components/GifCard.vue';

const store = useGifStore();

const { gifs: trendings } = storeToRefs(store);

onMounted(async () => {
  await store.fetchGifs();
});
</script>
