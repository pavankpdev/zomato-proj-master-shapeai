import { GET_REVIEW, POST_REVIEW } from "./review.type";

const INITIAL_STATE = {
  reviews: [],
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };

    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;
