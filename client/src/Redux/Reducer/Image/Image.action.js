import axios from "axios";

// Redux types
import { GET_IMAGE } from "./Image.type";

export const getImage = (_id) => async (dispatch) => {
  try {
    const Image = await axios({
      method: "GET",
      url: `http://localhost:4000/image/${_id}`,
    });

    return dispatch({ type: GET_IMAGE, payload: Image.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
