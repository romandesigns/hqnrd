import { reservationStore } from "./slices/reservation";
import { defaultInitState } from "./slices/reservation";

export const reservationStoreState = reservationStore(defaultInitState);
