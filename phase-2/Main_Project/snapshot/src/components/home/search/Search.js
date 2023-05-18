import React from "react";

const Search = ({ items, filterParam, q }) => {

  const searchParam = ["title"];
  return items && items.filter((item) => {
    if (item.temprature_type === filterParam) {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    } else if (filterParam === "All") {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    }
  });
};


export default Search;
