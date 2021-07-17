const initialState = {
    top: false,
    left: false,
    bottom: false,
    right: false
};

export default function DrawerReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.anchor]: action.value
      };
    default:
      return state;
  }
}
