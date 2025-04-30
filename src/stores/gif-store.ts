import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { api } from 'src/boot/axios';

const FAVORITES_KEY = 'favorites';

export const useGifStore = defineStore('gif-store', {
  state: () => ({
    gifs: [] as any[],
    favorites: [] as any[],
    categories: [] as any[],
  }),

  getters: {
    totalFavorites(): number {
      return this.favorites.length;
    },
  },

  actions: {
    loadFavoritesFromStorage() {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        try {
          this.favorites = JSON.parse(stored);
        } catch (e) {
          console.error('Erro ao carregar favoritos do localStorage', e);
        }
      }
    },

    saveFavoritesToStorage() {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites));
    },

    addFavorite(gif: any) {
      const isInFavorite = this.favorites.some((g) => g.id === gif.id);

      if (!isInFavorite) {
        this.favorites = [...this.favorites, gif];
        this.saveFavoritesToStorage();

        return Notify.create({
          type: 'positive',
          message: 'Adicionado aos favoritos!',
          timeout: 2000,
          position: 'top-right',
        });
      }

      return Notify.create({
        type: 'info',
        message: 'Esse item já está nos favoritos.',
        timeout: 2000,
        position: 'top-right',
      });
    },

    removeFromFavorite(id: any) {
      this.favorites = this.favorites.filter((f) => f.id !== id);
      this.saveFavoritesToStorage();
    },

    async fetchGifs() {
      const apiKey = import.meta.env.VITE_SECRET_KEY;

      const res = await api.get<{ data: any[] }>(`/trending?api_key=${apiKey}`);

      this.gifs = res.data.data;
    },

    async fetchCategories() {
      const apiKey = import.meta.env.VITE_SECRET_KEY;

      const res = await api.get<{ data: any[] }>(`/categories?api_key=${apiKey}`);

      this.categories = res.data.data;
    },
  },
});
