import { GET_FOOD_LIST } from "./Food.type";

const INITIAL_STATE = {
  FoodList: [],
};

const FoodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        FoodList: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default FoodReducer;
