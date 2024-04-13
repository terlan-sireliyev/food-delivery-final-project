import axios from "axios";
import { create } from "zustand";
const useBasketFetch = create<any>((set: any) => ({
  basketData: [],
  basketDataAll: [],
  //здесь мы получаем содержимое данных
  setBasketFetchData: async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const dataFetch = await axios.get("http://localhost:3000/api/basket", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      set({ basketData: dataFetch.data.result.data.items });
    } catch (error) {}
  },
  //здесь мы получаем сами данные
  setBasketFetchAllData: async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const dataFetchAll = await axios.get("http://localhost:3000/api/basket", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      set({ basketDataAll: dataFetchAll.data.result.data });
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
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
        return { basketData: updatedBasketData };
      }
      return state;
    }),
  //здесь мы удаляем все данные
  clearBasket: () => set({ basketData: [] }),
}));
export default useBasketFetch;
