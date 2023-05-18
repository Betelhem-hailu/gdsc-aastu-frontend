import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { Navbar, Post, Search } from "../index";
import { Box } from "@mui/material";
import SearchButton from "./search/SearchButton";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [items, setItem] = useState();
  const [filterParam, setFilterParam] = useState(["All"])
  const {data}  = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    onSuccess: (data) => setItem(data),
  });

  const results = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    onSuccess: (data) => {
      const menu = data.map((val) => val.temperature_type);
      const uniqueMenuItems = [...new Set(menu)];
      setMenuItems(uniqueMenuItems);
    },
  });

  return (
    <Box>
      <SearchButton items={data} filterParam={filterParam} />
      {/*<Search items={items} menuItems={menuItems} searchParam={searchParam} />*/}{" "}
      <Navbar setFilterParam={setFilterParam} menuItems={menuItems} />
      <Post menuItems={menuItems} />
    </Box>
  );
};

export default Home;
