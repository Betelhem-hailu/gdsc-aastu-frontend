import React from "react";
import { Stack, Button } from "@mui/material";



const Navbar = ({setFilterParam, menuItems}) => {

  // const filterparam = (temperature_type) => {
  //   const newItem = items.filter((newVal) => {
  //     return newVal.temperature_type === temperature_type;
  //   });
  //   setItem(newItem);
  // };
  
  return (
    <Stack direction="row" spacing={8} justifyContent="center" ml="50px">
      <Button
        variant="contained"
        onClick={(val) => setFilterParam(val) }
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
            onClick={() => setFilterParam(Val)}
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
