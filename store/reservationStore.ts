import {
  createReservatationStore,
  initReservationStore,
} from "./slices/reservation";

export const reservationStoreState = createReservatationStore(
  initReservationStore(),
);
