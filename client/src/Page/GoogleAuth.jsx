import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// redux action
import { googleAuth } from "../Redux/Reducer/Auth/Auth.action";

const GoogleAuth = () => {
  const { token } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token)).then(() => history.push("/delivery"));
    }
  }, [token]);

  return <>Loading, Please wait. </>;
};

export default GoogleAuth;
