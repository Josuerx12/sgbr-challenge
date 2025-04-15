<template>
  <q-item
    :to="link"
    tag="a"
    clickable
    active-class="tw-bg-blue-600 tw-text-white tw-rounded-lg"
    v-ripple
    class="q-my-sm transition-all duration-200 tw-text-gray-300 hover:tw-bg-blue-800 tw-rounded-lg"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon class="tw-text-gray-400" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
  icon: '',
});
</script>
