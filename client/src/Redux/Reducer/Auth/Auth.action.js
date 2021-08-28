import axios from "axios";

// Redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH } from "./Auth.type";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signin`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signup`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// export const googleAuth = (userData) => async (dispatch) => {
//   try {
//     const User = await axios({
//       method: "POST",
//       url: `http://localhost:4000/auth/signup`,
//       data: { credentials: userData },
//     });

//     localStorage.setItem(
//       "zomatoUser",
//       JSON.stringify({ token: User.data.token })
//     );

//     return dispatch({ type: SIGN_UP, payload: User.data });
//   } catch (error) {
//     return dispatch({ type: "ERROR", payload: error });
//   }
// };
