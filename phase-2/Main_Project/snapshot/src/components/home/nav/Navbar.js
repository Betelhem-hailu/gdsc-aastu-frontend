import React, { useContext } from "react";
import { Stack, Button } from "@mui/material";
import { SearchContext } from "../search/DataContext";



const Navbar = ({menuItems, posts}) => {
  const {setFilteredBy, handleSearch} = useContext(SearchContext);
  
  return (
    <Stack direction="row" spacing={8} justifyContent="center" ml="50px">
      <Button
        variant="contained"
        onClick={() =>{
          setFilteredBy("All")
          handleSearch(posts);
        }}
        sx={{
          background: "#7699d4",
          ":hover": {
            background: "#7699d4",
          },
        }}
      >
        All
      </Button>
      {menuItems.map((Val) => {
        return (
          <Button
            variant="contained"
            sx={{
              background: "#7699d4",
              ":hover": {
                background: "#7699d4",
              },
            }}
            onClick={() => {
              setFilteredBy(Val)
              handleSearch(posts);
            }}
            key={menuItems.flora_type}
          >
            {Val}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Navbar;