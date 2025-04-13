// src/stores/counter-store.ts
import { Locale } from "@/i18n-config";
import {
  checkDateDifference,
  checkIfDiscountIsApplicable,
  getPriceWithDiscount,
} from "@/utils/computeFees";
import { devtools, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type ReservationStatusTypes = "added" | "updated" | "removed";

export type ReservationState = {
  status: ReservationStatusTypes;
  adults: number;
  children: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  roomType: string;
  bookingMessage: string;
  unit: number;
  lang: Locale;

  // Reservation fees
  pricePerNight: number;
  totalDays?: number;
  discountPercentage?: number;
  discountedAmount?: number;
  totalAmount?: number;
  deposite?: number;
  totalAmountAfterDiscount?: number;
  depositeAmountAfterDiscount?: number;
};

//  For internal use only
const calculateReservationMeta = (
  payload: ReservationState,
): ReservationState => {
  const { checkInDate, checkOutDate } = payload;
  if (!checkInDate || !checkOutDate) return { ...payload, status: "added" };

  const { days } = checkDateDifference(checkInDate, checkOutDate);
  const discountPercentage = checkIfDiscountIsApplicable(days);
  const {
    discountedAmount,
    totalAmountAfterDiscount,
    depositeAmountAfterDiscount,
  } = getPriceWithDiscount(days, payload.pricePerNight);

  return {
    ...payload,
    totalDays: days,
    discountPercentage, // ← número crudo
    discountedAmount,
    totalAmountAfterDiscount,
    totalAmount: payload.pricePerNight * days,
    deposite: (payload.pricePerNight * days) / 2,
    depositeAmountAfterDiscount,
    status: "added",
  };
};

export type ReservationActions = {
  addReservation: (payload: ReservationState) => void;
  updateReservation: (payload: ReservationState) => void;
  removeReservation: (unit: number) => void;
  removeAllReservations: () => void;
  changeMode: (unit: number, status: ReservationStatusTypes) => void;
  removeBooking: (unit: number) => void;
};

export type ReservationStore = ReservationActions & {
  reservations: ReservationState[];
};

export const initReservationStore = (): ReservationState[] => {
  return [];
};

export const createReservatationStore = (
  initState: ReservationState[] = initReservationStore(),
) => {
  return createStore<ReservationStore>()(
    devtools(
      persist(
        (set, get) => ({
          reservations: initState,

          addReservation: (payload) =>
            set((state) => {
              const exists = state.reservations.some(
                (r) => r.unit === payload.unit,
              );
              if (exists) return state;

              const newReservation = calculateReservationMeta(payload);
              return {
                reservations: [...state.reservations, newReservation],
              };
            }),

          updateReservation: (payload) =>
            set((state) => {
              const enrichedPayload = calculateReservationMeta(payload);
              return {
                reservations: state.reservations.map((r) =>
                  r.unit === payload.unit ? enrichedPayload : r,
                ),
              };
            }),

          removeReservation: (unit) =>
            set((state) => ({
              reservations: state.reservations.filter((r) => r.unit !== unit),
            })),

          changeMode: (unit, status) =>
            set((state) => {
              console.log(unit, status);
              return {
                reservations: state.reservations.map((r) => {
                  return r.unit === unit ? { ...r, status } : r;
                }),
              };
            }),

          removeBooking: (unit) =>
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
