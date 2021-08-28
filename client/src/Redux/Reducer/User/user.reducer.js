import { GET_USER, SELF } from "./user.type";

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

    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
