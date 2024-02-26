import {create} from 'zustand'

export const useBasket = create((set) => ({
    basket: [],
    updateBasket: (newProduct) => set((state) => ({ basket: [...state.basket,newProduct] })),
  }))