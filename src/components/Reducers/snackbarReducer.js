const initialState = {
    status:"default",
    open: false,
    text:"default"
};

export default function SnackBarReducer(state = initialState, action) {
  switch (action.type) {
    case "CLOSESNACK":
      return {
        status: "default",
        open:action.value,
        text:"default"
      };
    case "OPENSNACK":
      return {
        status: action.status,
        open: true,
        text: action.text
    };
    default:
      return state;
  }
}