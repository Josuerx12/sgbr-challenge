<template>
  <q-btn @click="handleOpen">{{ category.name }}</q-btn>

  <q-dialog v-model="isOpen">
    <q-card class="my-card">
      <q-img
        class="tw-w-56 md:tw-w-96 md:tw-h-96 tw-h-56"
        :src="category.gif.images.preview_gif.url"
      />

      <q-card-section>
        <div class="tw-font-semibold tw-text-lg tw-text-black/80">{{ category.name }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="red" label="Fechar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface CategoryDialogProps {
  category: any;
}

defineProps<CategoryDialogProps>();

const isOpen = ref(false);

function handleOpen() {
  isOpen.value = !isOpen.value;
}
</script>
