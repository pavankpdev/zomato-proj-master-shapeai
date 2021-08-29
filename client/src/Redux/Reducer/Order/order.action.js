import axios from "axios";

// Redux types
import { CREATE_ORDER, ORDER_PLACED } from "./order.type";

export const createOrder = (amount) => async (dispatch) => {
  try {
    const order = await axios({
      method: "POST",
      url: "http://localhost:4000/payments/new",
      data: { amount },
    });

    return dispatch({ type: CREATE_ORDER, payload: order.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const orderPlaced = (cartData) => async (dispatch) => {
  try {
    const placeOrder = cartData.map((foodItem) => {
      const orderDetails = {
        food: foodItem._id,
        quantity: foodItem.quantity,
        paymode: "ONLINE",
        paymentDetails: {
          itemTotal: foodItem.totalPrice,
          promo: 0,
          tax: 0,
        },
      };
      axios({
        method: "POST",
        url: `http://localhost:4000/order/new`,
        data: { orderDetails },
      });
    });

    await Promise.all(placeOrder);

    return dispatch({
      type: ORDER_PLACED,
      payload: {},
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
