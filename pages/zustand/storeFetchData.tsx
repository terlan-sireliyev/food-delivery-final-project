import axios from "axios";
import { create } from "zustand";

const useBasketFetch = create<any>((set: any) => ({
  basketData: [],

  setBasketFetchData: async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("http://localhost:3000/api/basket", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      set({ basketData: response.data.result.data.items });
    } catch (error) {
      console.error("Error fetching basket data:", error);
    }
  },

  incrementApiCount: (id: string) => {
    set((state: any) => {
      const updatedBasketData = state.basketData.map((item: any) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 }; // Immutably increment count
        }
        return item;
      });
      return { basketData: updatedBasketData };
    });
  },

  decrementCountApi: (id: string) => {
    set((state: any) => {
      const updatedBasketData = state.basketData.map((item: any) => {
        if (item.id === id) {
          return { ...item, count: Math.max(item.count - 1, 0) }; // Immutably decrement count
        }
        return item;
      });
      return { basketData: updatedBasketData };
    });
  },

  clearBasket: () => set({ basketData: [] }),
}));

export default useBasketFetch;
