import React from "react";
import Item from "./Item/Item";

const ItemList = ({ vinosDisplay }) => {
  return (
    <div>
      {vinosDisplay.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
export default ItemList;
