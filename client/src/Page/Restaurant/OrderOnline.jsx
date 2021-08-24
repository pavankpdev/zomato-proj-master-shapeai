import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex ">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500">
            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
          </h4>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp"
              price="1000"
              rating={3}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta repellendus sit cumque eum odio animi doloribus quo voluptatem aut ipsam, consectetur non minima rerum eligendi magnam aspernatur culpa provident?"
              title="Yummy food"
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
