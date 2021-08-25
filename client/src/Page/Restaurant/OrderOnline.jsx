import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../Components/restaurant/Order-Online/FoodList";
const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen flex ">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            <FoodList
              title="Recommended"
              items={[
                {
                  price: "1000",
                  rating: 3,
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta repellendus sit cumque eum odio animi doloribus quo voluptatem aut ipsam, consectetur non minima rerum eligendi magnam aspernatur culpa provident?",
                  title: "Yummy food",
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp",
                },
              ]}
            />
            <FoodList
              title="Pizza"
              items={[
                {
                  price: "1000",
                  rating: 3,
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta repellendus sit cumque eum odio animi doloribus quo voluptatem aut ipsam, consectetur non minima rerum eligendi magnam aspernatur culpa provident?",
                  title: "Yummy food",
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp",
                },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
