import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { Navbar, Post, Search } from "../index";
import { Box } from "@mui/material";
import { Result } from "../api/posts";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  const {data, isLoading, error} = Result();

  const [items, setItem] = useState(data);
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
      <Search />
      <Navbar setItem={setItem}  menuItems={menuItems} items={items} />
      <Post   items={items} menuItems={menuItems}/>
    </Box>
  );
};

export default Home;
