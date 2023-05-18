import { useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import Search from "./Search";
function SearchButton(items, filterParam) {
  const [q, setQ] = useState("");
  return (
    <Stack alignItems="center" mt="10px" justifyContent="center" p="10px">
      <Typography
        color="#783f8e"
        fontWeight={700}
        fontFamily="Dancing Script"
        sx={{ fontSize: { lg: "54px", xs: "30px" } }}
        mb="10px"
        textAlign="center"
      >
        Snapshot
      </Typography>
      <Box position="relative" mb="30px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="70px"
          value={q}
          onChange={(event) => {
            setQ(event.target.value);
          }}
          placeholder="Start typing... "
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#783f8e",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
        <Search items={items} filterParam={filterParam} q={q} />
      </Box>
    </Stack>

  );
}

export default SearchButton;
