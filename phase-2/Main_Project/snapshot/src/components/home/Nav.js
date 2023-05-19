import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";

const Nav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "850px", xs: "100px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="50px"
    >
      <Stack direction="row" gap="20px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            // borderBottom: "3px solid #783f8e",
          }}
        >
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#3A1212" }}>
          About
        </Link>
        <Link to="/news" style={{ textDecoration: "none", color: "#3A1212" }}>
          News
        </Link>
      </Stack>
      <Button
        variant="contained"
        color="secondary"
        href="#login"
        sx={{ background: "#783f8e", padding: "5px" }}
      >
        <Link to="/login" style={{ textDecoration: "none", color: '#fff'}} >Login</Link>
      </Button>
    </Stack>
  );
};

export default Nav;
