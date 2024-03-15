import axios from "axios";
import { create } from "zustand";

export const useBasket = create<any>((set: any) => ({
  basket: [] as { id: number; count: number }[],
  setBasket: (elements: any) => {
    set((state: any) => {
      return {
        basket: [elements],
      };
    });
  },
  // updateBasket: (newProduct: any) => {
  //   set((state: any) => {
  //     const currentProduct = state.basket.find(
  //       (item:any) => item.id === newProduct.id
  //     );
  //     if (!currentProduct) {
  //       return {
  //         basket: [...state.basket, { ...newProduct, count: 1 }],
  //       };
  //     } else {
  //       currentProduct.count += 1;
  //       return {
  //         basket: [...state.basket],
  //       };
  //     }
  //   });
  // },
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
        ...state,
        basket: updatedBasket,
      };
    });
  },
  deleteOrder: (productId: any) => {
    set((state: any) => {
      const filterCard = state.basket.filter(
        (fil: any) => fil.id !== productId
      );
      //  const filterCard= axios.delete(`http://localhost:3000/api/basket/delete}`).then((res) => {
      //     console.log("silindi");
      //   })
      //   .catch((err) => {
      //     alert("Silinmedi");
      //   });
      return {
        ...state,
        basket: filterCard,
      };
    });
  },
}));
