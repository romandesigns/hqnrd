// stores/counter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Types
export type NavigationState = {
  isOpen: boolean;
  closeNavigation: () => void;
  openNavigation: () => void;
};

// Store
export const useNavToggle = create<NavigationState>()(
  devtools((set) => ({
    isOpen: false,
    closeNavigation: () => set(() => ({ isOpen: false }), false, "Close Modal"),
    openNavigation: () => set({ isOpen: true }, false, "Open Modal"),
  }))
);
