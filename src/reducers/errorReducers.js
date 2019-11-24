export default function(state = {}, action) {
  switch (action.type) {
    case "GET_ERRORS":
      return action.payload;
    case "PUSH_TRANSACTION":
      return {};
    case "SET_CURRENT_USER":
      return {};
    default:
      return state;
  }
}
