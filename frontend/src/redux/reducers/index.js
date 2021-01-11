import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  rooms: roomsReducer,
  theme: themeReducer,
});

export default rootReducer;
