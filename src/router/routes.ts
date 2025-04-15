import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/categorias',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/categorias', component: () => import('pages/CategoryPage.vue') }],
  },
  {
    path: '/favoritos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/favoritos', component: () => import('pages/FavoritePage.vue') }],
  },
  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/sobre', component: () => import('pages/AboutPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
