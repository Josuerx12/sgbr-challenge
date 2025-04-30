<template>
  <h2 class="tw-text-3xl tw-font-semibold tw-mb-6">Categorias</h2>

  <section class="tw-container tw-bg-white tw-min-h-screen tw-p-10">
    <div
      v-if="categories"
      class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-6"
    >
      <CategoryDialog v-for="category of categories" :key="category.id" :category="category" />
    </div>

    <div v-else>
      <p>Nenhum gif encontrado!</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGifStore } from 'src/stores/gif-store';
import { onMounted } from 'vue';
import CategoryDialog from '../components/CategoryDialog.vue';

const store = useGifStore();

const { categories } = storeToRefs(store);

onMounted(async () => {
  const { fetchCategories } = store;

  await fetchCategories();
});
</script>
