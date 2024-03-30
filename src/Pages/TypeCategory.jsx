import React from "react";
import FilteredItems from "./FilterItems/FilterItems";

const TypeCategory = ({ type }) => {
  const filterCondition = (data) => data.type === type;
  return <FilteredItems filterCondition={filterCondition} />;
};

export default TypeCategory;