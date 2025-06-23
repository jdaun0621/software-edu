import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Lecture } from "@/types/lecture";

interface CartStore {
  items: Lecture[];
  addToCart: (lecture: Lecture) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (lecture) => {
        const exists = get().items.some((item) => item.id === lecture.id);
        if (!exists) {
          set({ items: [...get().items, lecture] });
        }
      },
      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      clearCart: () => set({ items: [] })
    }),
    { name: "cart-storage" }
  )
);