// Initial State
const rooms = [];

// Rooms Reducer
const roomsReducer = (state = rooms, action) => {
  switch (action.type) {
    case "GET_ROOMS":
      return state;
    default:
      return state;
  }
};

export default roomsReducer;
