import React from "react";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout = () => {
  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 ">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
          ]}
        />
      </div>
    </>
  );
};

export default RestaurantLayout;
