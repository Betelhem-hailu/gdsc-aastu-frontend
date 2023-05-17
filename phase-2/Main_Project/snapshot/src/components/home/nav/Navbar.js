import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import { Filter } from "../../HandleFunc";


const Navbar = ({setItem, menuItems, items }) => {

  
  return (
    <Stack direction="row" spacing={8} justifyContent="center" ml="50px">
      <Button
        variant="contained"
        onClick={(val) => setItem(val) }
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
            onClick={() => Filter(Val, items, setItem)}
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
