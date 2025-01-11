import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { mobileNavBarInitialState } from "./initialStates";
import { MobileNavBarPropTypes } from "./interface";

export interface CombinedStore extends MobileNavBarPropTypes {}

// Create Combined Store
export const useCombinedStore = create<CombinedStore>()(
  devtools((set, get) => ({
    ...mobileNavBarInitialState,
    toggleMobileNavigation: () => set({ isOpen: !get().isOpen }),
    autoCloseNavigation: () => set({ isOpen: false }),
  })),
);
