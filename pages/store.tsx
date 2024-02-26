import { create } from "zustand";

export const useBasket = create<any>((set: any) => ({
  basket: [] as { id: number; count: number }[],
  totalCount: 0,
  updateBasket: (newProduct: any) => {
    set((state: any) => {
      const findPro = state.basket.find(
        (item: any) => item.id === newProduct.id
      );

      if (findPro) {
        const updatedBasket = state.basket.map((item: any) =>
          item.id === newProduct.id ? { ...item, count: item.count + 1 } : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...newProduct, count: 1 }],
          totalCount: state.totalCount + 1,
        };
      }
    });
  },
  decrementBasket: (productId: any) => {
    set((state: any) => {
      const updatedBasket = state.basket.map((item: any) =>
        item.id === productId
          ? { ...item, count: Math.max(0, item.count - 1) }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
        totalCount: Math.max(0, state.totalCount - 1),
      };
    });
  },
}));
