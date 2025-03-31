import { useShallow } from "zustand/shallow";
import { useCombinedStore } from "..";

// Navigation
export function useMobileNavigation() {
  return useCombinedStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      toggleMobileNavigation: state.toggleMobileNavigation,
      autoCloseNavigation: state.autoCloseNavigation,
    })),
  );
}
