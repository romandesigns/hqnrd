"use client";

import {
  createReservatationStore,
  initReservationStore,
  ReservationStore,
} from "@/store/slices/reservation";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand/react";
import { useShallow } from "zustand/react/shallow";

// Tipo del store
export type ReservationStoreApi = ReturnType<typeof createReservatationStore>;

// Contexto para acceder al store
export const ReservationStoreContext = createContext<
  ReservationStoreApi | undefined
>(undefined);

// Props del provider
export interface ReservationStoreProviderProps {
  children: ReactNode;
}

// Provider que inicializa y expone el store
export const ReservationStoreProvider = ({
  children,
}: ReservationStoreProviderProps) => {
  const storeRef = useRef<ReservationStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createReservatationStore(initReservationStore());
  }

  return (
    <ReservationStoreContext.Provider value={storeRef.current}>
      {children}
    </ReservationStoreContext.Provider>
  );
};

/**
 * Hook personalizado para acceder al estado de reservaciones
 * con shallow comparison incluida por defecto (previene renders innecesarios).
 */
export const useReservatationStore = <T,>(
  selector: (store: ReservationStore) => T,
): T => {
  const reservationStoreContext = useContext(ReservationStoreContext);

  if (!reservationStoreContext) {
    throw new Error(
      `useReservatationStore must be used within ReservationStoreProvider`,
    );
  }

  return useStore(reservationStoreContext, useShallow(selector));
};
