// src/providers/counter-store-provider.tsx
"use client";
import {
  createReservatationStore,
  initReservationStore,
  ReservationStore,
} from "@/store/slices/reservation";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type ReservationStoreApi = ReturnType<typeof createReservatationStore>;

export const ReservationStoreContext = createContext<
  ReservationStoreApi | undefined
>(undefined);

export interface ReservationStoreProviderProps {
  children: ReactNode;
}

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

export const useReservatationStore = <T,>(
  selector: (store: ReservationStore) => T,
): T => {
  const reservationStoreContext = useContext(ReservationStoreContext);
  if (!reservationStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }
  return useStore(reservationStoreContext, selector);
};
