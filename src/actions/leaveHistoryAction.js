import {
    GET_LEAVE_HISTORY
  } from "../actions/types";
  
  export const getUserHistory = () => {
    return {
      history: GET_LEAVE_HISTORY
    };
  };