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
}));
