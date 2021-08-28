import { GET_USER, SELF, CLEAR_USER } from "./user.type";

const INITIAL_STATE = {
  user: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };

    case SELF:
      return {
        ...state,
        user: action.payload,
      };
      
    case CLEAR_USER:
      return {};

    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
