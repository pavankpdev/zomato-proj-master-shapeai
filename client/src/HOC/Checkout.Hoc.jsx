import React from "react";
import { Route } from "react-router-dom";

// Layout
import CheckoutLayout from "../Layout/Checkout.layout";

const CheckoutLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  );
};

export default CheckoutLayoutHOC;
