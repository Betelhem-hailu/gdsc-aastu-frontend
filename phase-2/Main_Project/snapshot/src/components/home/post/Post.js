import React, { useContext } from "react";
import { BsDownload, BsEye } from "react-icons/bs";
import { Box, Stack, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { SearchContext } from "../search/DataContext";

const Post = (menuItems) => {
    const {filteredLocations, setFilteredLocations} = useContext(SearchContext)
    return (
      <Box sx={{ mt: { lg: "70px" } }} mt="50px" p="20px" ml="100px">
      {(filteredLocations &&
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredLocations.map((item) => (
            <Grid xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, mb: '20px'}} key={item.title}>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image_url}
                  alt="{item.title}"
                />
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" mb="5px">
                      {item.title}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        m: "2px",
                        color: "#FF6663",
                        borderColor: "#FF6663",
                        borderRadius: "50px",
                        ":hover": {
                          background: "#FF6663",
                          borderColor: "#FF6663",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <BsEye />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        m: "2px",
                        color: "#FF6663",
                        borderColor: "#FF6663",
                        borderRadius: "50px",
                        ":hover": {
                          background: "#FF6663",
                          borderColor: "#FF6663",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <BsDownload />
                    </Button>
                  </CardContent>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      </Box>
    );
  }

export default Post;