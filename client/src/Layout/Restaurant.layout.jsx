import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import TabContainer from "../Components/restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

// Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { getCart } from "../Redux/Reducer/Cart/Cart.action";
const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuising: "",
    address: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
        setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
      );
    });

    dispatch(getCart());
  }, []);

  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 pb-10 ">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.rating || 0}
          deliveryRating={restaurant?.rating || 0}
          cuisine={restaurant?.cuising}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
