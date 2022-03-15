import { ActionTypes } from "../constants/action-types";


const initialState = {
    users: [ ],
};

const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.LIST_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
