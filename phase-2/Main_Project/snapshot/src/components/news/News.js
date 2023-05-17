import React from "react";
import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Output } from "../api/news";

const News = () => {
  const { isLoading, error, data } = Output();

 

  return (
    <Box sx={{ mt: { lg: "10px" } }} mt="10px" p="20px" ml="90px">
    <Typography
    color="#783f8e"
    fontWeight={700}
    fontFamily='Dancing Script'
    sx={{ fontSize: { lg: "54px", xs: "30px" } }}
    mb="50px"
    textAlign="center"
  >
   News
  </Typography>
    {isLoading && <Box>Loading...</Box>}
    {error && <Box>Error: {error.message}</Box>}
    {data &&
      <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
    {data.articles.map((article) => (
      <Grid xs='auto' sm={4} md={4}>
      <Card sx={{ maxWidth: 350, maxHeight: 500, mb: '10px' }} key={article} backgroundColor="#7699d4">
      <CardMedia
        sx={{ height: 140 }}
        image={article.urlToImage}
        title={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      </Grid>
    ))}
    </Grid>
    }
    </Box>
  )
}

export default News;
