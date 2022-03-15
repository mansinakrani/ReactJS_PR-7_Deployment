import { ActionTypes } from "../constants/action-types";


export const setUsers = (users: string[] | [] | number) => {
  return {
    type: ActionTypes.LIST_USERS,
    payload: users, 
  };
};
