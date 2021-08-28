import React from "react";

// components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div>
        <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold">
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((item) => (
            <FoodItem key={item} _id={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
