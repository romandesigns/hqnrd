import { create } from "zustand";

interface NavigationToggleState {
  isOpen: boolean;
  toggleMobileNavigation: () => void;
}

const useNavigationToggle = create<NavigationToggleState>((set, get) => ({
  isOpen: false,
  toggleMobileNavigation: () => set({ isOpen: !get().isOpen }),
}));

export default useNavigationToggle;
