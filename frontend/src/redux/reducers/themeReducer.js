// Initial State
const theme = [];

// Rooms Reducer
const themeReducer = (state = theme, action) => {
  switch (action.type) {
    case "SET_THEME":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default themeReducer;
