import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { Navbar, Post, Search } from "../index";
import { Box } from "@mui/material";
import SearchButton from "./search/SearchButton";
import { SearchContext } from "./search/DataContext";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { filteredLocation, handleSearch } = useContext(SearchContext);
  const {data}  = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    onSuccess: (data) => {
      const menu = data.map((val) => val.temperature_type);
      const uniqueMenuItems = [...new Set(menu)];
      setMenuItems(uniqueMenuItems);
      handleSearch(data);
    }
  });
  return (
    <Box>
      <SearchButton posts={data}/>
      <Navbar  menuItems={menuItems} posts={data} />
      <Post menuItems={menuItems} />
    </Box>
  );
};

export default Home;