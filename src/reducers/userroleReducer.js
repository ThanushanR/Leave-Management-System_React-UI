import {
  GET_USER_ROLE,
  ADD_USER_ROLE,
  DELETE_USER_ROLE
} from "../actions/types";

const initialState = {
  roles: [
    { id: 1, rolename: "Director" },
    { id: 2, rolename: "Admin" },
    { id: 3, rolename: "HR" },
    { id: 4, rolename: "Bassic" },
    { id: 5, rolename: "test" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ROLE:
      return {
        ...state
      }
    default:
      return state;
  }
};
