const initialState = {
    status:"default",
    open:false,
    text:"default"
};

export default function ProfileCardReducer(state = initialState, action) {
  switch (action.type) {
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
