<template>
  <div class="tw-p-10">
    <h2 class="tw-text-3xl tw-font-semibold tw-my-8">Paginal Inicial</h2>

    <div class="tw-container tw-bg-white">
      <div v-if="trendings" class="tw-flex tw-flex-wrap tw-gap-4 tw-justify-between tw-p-5">
        <div v-for="item of trendings" :key="item.id" class="tw-w-56">
          <img
            class="tw-w-56 tw-h-56 tw-object-fit tw-rounded-md"
            :src="item.images.preview_gif.url"
            :alt="'imagem do item: ' + item.slug"
          />
          <p class="tw-text-black text-center tw-mt-3">{{ item.slug }}</p>
        </div>
      </div>

      <div v-else>
        <p>Nenhum gif encontrado!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';

type Trending = any;

const trendings = ref<Trending[]>([]);

onMounted(async () => {
  const apiKey = import.meta.env.VITE_SECRET_KEY;

  const res = await api.get<{ data: Trending[] }>(`/trending?api_key=${apiKey}`);

  console.log(res.data.data);

  trendings.value = res.data?.data;
});
</script>
