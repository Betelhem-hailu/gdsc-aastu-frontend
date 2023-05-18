// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Result } from "./api/posts";
// import { getPosts } from "../api/posts";

export const Search = (items, menuItems, searchParam, q) => {
  return (items.filter((item) => {
    if (item.temprature_type === menuItems) {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    } else if (menuItems === "All") {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    }
  }))
};

export const Filter = (temperature_type, items, setItem) => {
  const newItem = items.filter((newVal) => {
    return newVal.temperature_type === temperature_type;
  });
  setItem(newItem);
};
