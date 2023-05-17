import React, { useState} from "react";
import { BsDownload, BsEye } from "react-icons/bs";
import { Result } from "../../api/posts";
import { Box, Stack, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Search } from "../../HandleFunc";

const Post = ({ items, menuItems}) => {
  const [searchParam] = useState(["title", "flora_type"]);
  const [q, setQ] = useState("");
  const {status} = Result();

  if (status === 'Loading') {
    return <div>Loading...</div>;
  } else if (status === 'error') {
    return <div>Error: {status.message}</div>;
  } else {
    return (
      <Box sx={{ mt: { lg: "70px" } }} mt="50px" p="20px" ml="100px">
      {items && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Search(items, menuItems, searchParam, q).map((item) => (
            <Grid xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345 }} key={item.title}>
                <CardMedia
                  component="img"
                  height="194"
                  image={items.image_url}
                  alt="{item.title}"
                />
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" mb="5px">
                      {items.title}
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
};

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="194"
//         image={item.image}
//         alt="{item.title}"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          {item.title}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }

export default Post;
