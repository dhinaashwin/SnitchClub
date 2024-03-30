import React from "react";
import FilteredItems from "./FilterItems/FilterItems";

const ShoppingCat = ({ category }) => {
  const filterCondition = (data) => data.category === category;
  return <FilteredItems filterCondition={filterCondition} />;
};

export default ShoppingCat;
