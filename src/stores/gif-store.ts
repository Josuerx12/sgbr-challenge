import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useGifStore = defineStore('gif-store', {
  state: () => ({
    gifs: [] as any[],
    favorites: [] as any[],
  }),

  getters: {
    totalFavorites(): number {
      return this.favorites.length;
    },
  },

  actions: {
    addFavorite(gif: any) {
      const isInFavorite = this.favorites.some((g) => g.id === gif.id);

      if (!isInFavorite) {
        this.favorites = [...this.favorites, gif];
      }
    },

    removeFromFavorite(id: any) {
      return (this.favorites = this.favorites.filter((f) => f.id !== id));
    },

    async fetchGifs() {
      const apiKey = import.meta.env.VITE_SECRET_KEY;

      const res = await api.get<{ data: any[] }>(`/trending?api_key=${apiKey}`);

      this.gifs = res.data.data;
    },
  },
});
