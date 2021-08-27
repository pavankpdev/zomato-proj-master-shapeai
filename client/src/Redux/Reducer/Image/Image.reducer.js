import { GET_IMAGE } from "./Image.type";

const INITIAL_STATE = {
  Image: [],
};

const ImageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        Image: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ImageReducer;
