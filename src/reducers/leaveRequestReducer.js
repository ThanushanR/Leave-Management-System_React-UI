const initialState = {
  pending: false,
  leaveRequest: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "DATA_PENDING":
      return {
        ...state,
        pending: true
      };
    case "DATA_SUCCESS":
      return {
        ...state,
        pending: false,
        leaveRequest: action.leaveRequest
      };
    case "DATA_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
