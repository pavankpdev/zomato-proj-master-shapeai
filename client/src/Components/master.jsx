import React from "react";
import { useParams } from "react-router-dom";

// components
import Delivery from "./Delivery";

const Master = () => {
  const { type } = useParams();
  return <div className="my-5">{type === "delivery" && <Delivery />}</div>;
};

export default Master;
