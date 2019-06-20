import {
  GET_USER_ROLE,
  ADD_USER_ROLE,
  DELETE_USER_ROLE
} from "../actions/types";

export const getUserrole = () => {
  return {
    type: GET_USER_ROLE
  };
};
