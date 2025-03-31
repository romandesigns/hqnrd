// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";
import { persist, devtools } from "zustand/middleware";

export type ReservationState = {
  adults: number;
  children: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  roomType: string;
  bookingMessage: string;
  unit: number;
};

export type ReservationActions = {
  addReservation: (payload: ReservationState) => void;
  updateReservation: (payload: ReservationState) => void;
  removeReservation: (unit: number) => void;
  removeAllReservations: () => void;
};

export type ReservationStore = ReservationActions & {
  reservations: ReservationState[];
};

export const defaultInitState: ReservationState[] = [];

export const reservationStore = (
  initState: ReservationState[] = defaultInitState,
) => {
  return createStore<ReservationStore>()(
    devtools(
      persist(
        (set, get) => ({
          reservations: initState,

          addReservation: (payload) =>
            set((state) => {
              console.log(payload);
              const exists = state.reservations.some(
                (r) => r.unit === payload.unit,
              );
              if (exists) return state;
              return {
                reservations: [...state.reservations, payload],
              };
            }),

          updateReservation: (payload) =>
            set((state) => ({
              reservations: state.reservations.map((r) =>
                r.unit === payload.unit ? payload : r,
              ),
            })),

          removeReservation: (unit) =>
            set((state) => ({
              reservations: state.reservations.filter((r) => r.unit !== unit),
            })),

          removeAllReservations: () => set(() => ({ reservations: [] })),
        }),
        {
          name: "reservations-storage",
          version: 1,
          merge: (persisted, current) => {
            const state = {
              ...current,
              ...(persisted as ReservationStore),
            };

            state.reservations = state.reservations.map((r) => ({
              ...r,
              checkInDate: r.checkInDate ? new Date(r.checkInDate) : null,
              checkOutDate: r.checkOutDate ? new Date(r.checkOutDate) : null,
            }));

            return state;
          },
        },
      ),
      { name: "ReservationStore" },
    ),
  );
};
