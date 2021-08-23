import React from "react";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-18 ">{props.children}</div>
    </>
  );
};

export default HomeLayout;
