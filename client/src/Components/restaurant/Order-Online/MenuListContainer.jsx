import React, { useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  const [selected, setSelected] = useState("");
  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <MenuCategory
          name="Recommended"
          items={["", ""]}
          onClickHandler={onClickHandler}
          isActive={selected === "Recommended"}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
