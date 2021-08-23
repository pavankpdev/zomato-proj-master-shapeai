import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantInfo = (props) => {
  return (
    <>
      <div className="my-4">
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
          <h1 className="text-xl md:text-3xl font-semibold md:font-bold">
            {props.name}
          </h1>
          <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
                {props.restaurantRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>2</strong>
                <p className="border-dashed border-b">Dining reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
                {props.deliveryRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>2</strong>
                <p className="border-dashed border-b">Deliery reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="text-base md:text-lg text-gray-600">
          <h3>{props.cuisine}</h3>
          <h3 className="text-gray-400">{props.address}</h3>
          <h3>
            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
