import axios from "axios";
import { create } from "zustand";

export const useBasketFetch = create<any>((set: any) => ({
  basketData: [],
  setBasketFetchData: async () => {
    const access_token = localStorage.getItem("access_token");

    try {
      const dataFetch = await axios.get("http://localhost:3000/api/basket", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      set({ basketData: dataFetch.data.result.data.items });
    } catch (error) {
      console.log("yalnis var ");
    }
  },

  incrementApiCount: (id: string) =>
    set((state: any) => {
      const findId = state.basketData.find((item: any) => item.id === id);
      if (findId) {
        const updatedBasketData = state.basketData.map((item: any) => {
          if (item.id === id) {
            return { ...item, count: (item.count += 1) };
          }
          return item;
        });
        return { basketData: updatedBasketData };
      }
      return state;
    }),
    decrementCountApi: (id: string) =>
    set((state: any) => {
      const findId = state.basketData.find((item: any) => item.id === id);
      if (findId) {
        const updatedBasketData = state.basketData.map((item: any) => {
          if (item.id === id) {
            return { ...item, count: (item.count - 1) };
          }
          return item;
        });
        return { basketData: updatedBasketData };
      }
      return state;
    }),
}));
