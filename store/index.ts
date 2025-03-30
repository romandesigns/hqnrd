import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { mobileNavBarInitialState } from "./initialStates";
import { MobileNavigationInterface, ReservationInterface } from "./interface";

export interface CombinedStore extends MobileNavigationInterface {}

// Create Combined Store
export const useCombinedStore = create<CombinedStore>()(
  devtools((set, get) => ({
    ...mobileNavBarInitialState,
    toggleMobileNavigation: () => set({ isOpen: !get().isOpen }),
    autoCloseNavigation: () => set({ isOpen: false }),
  })),
);
