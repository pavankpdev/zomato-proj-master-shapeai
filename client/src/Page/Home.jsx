import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

// redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Home = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);
  return (
    <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night" && <NightLife />}
      {type === "nutri" && <Nutrition />}
    </div>
  );
};

export default Home;
