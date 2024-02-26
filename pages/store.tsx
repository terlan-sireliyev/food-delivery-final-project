import { create } from "zustand";

export const useBasket = create<any>((set: any) => ({
  basket: [] as { id: number; count: number }[],
  updateBasket: (newProduct: any) => {
    set((state: any) => {
      const findPro = state.basket.find(
        (item: any) => item.id === newProduct.id
      );
      if (findPro) {
        const updatedBasket = state.basket.map((item: any) =>
          item.id === newProduct.id ? { ...item } : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...newProduct, count: 1 }],
        };
      }
    });
  },
  decrementBasket: (productId: any) => {
    set((state: any) => {
      const updatedBasket = state.basket.map((item: any) =>
        item.id === productId
          ? { ...item, count: item.count === 1 ? item.count : item.count - 1 }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
      };
    });
  },

  incirmentBasket: (productId: any) => {
    set((state: any) => {
      const updatedBasket = state.basket.map((item: any) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item
      );
      return {
        basket: updatedBasket,
      };
    });
  },
}));
