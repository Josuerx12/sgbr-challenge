<template>
  <q-layout view="hHh lpR lFf" class="">
    <q-header elevated class="bg-primary text-white tw-flex tw-px-6 tw-items-center">
      <q-toolbar class="q-pa-none">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>

      <div class="tw-flex tw-items-center tw-gap-2 tw-flex-nowrap tw-cursor-default">
        <h5 class="tw-text-nowrap">JOSUE CARVALHO</h5>
        <div class="tw-rounded-full tw-bg-gray-300">
          <q-icon class="tw-text-blue-950" name="person" size="24px" />
        </div>
      </div>
    </q-header>

    <q-drawer
      class="tw-bg-blue-950 tw-text-white tw-rounded-r-xl tw-p-8"
      v-model="leftDrawerOpen"
      side="left"
    >
      <q-list>
        <EssentialLink v-for="link in listLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="tw-bg-gray-300 tw-min-h-screen">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { EssentialLinkProps } from 'components/EssentialLink.vue';
import EssentialLink from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(true);

const listLinks: EssentialLinkProps[] = [
  { title: 'Home', icon: 'dashboard', link: '/' },
  { title: 'Favoritos', icon: 'group', link: '/favoritos' },
  { title: 'Categorias', icon: 'inventory_2', link: '/categorias' },
  { title: 'Sobre', icon: 'engineering', link: '/sobre' },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
