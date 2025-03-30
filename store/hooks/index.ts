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

// Reservations
export function useReservation() {
  return useCombinedStore(
    useShallow((state) => ({
      createReservation: state.isOpen,
      updateReservation: state.toggleMobileNavigation,
      deleteReservatation: state.autoCloseNavigation,
    })),
  );
}
