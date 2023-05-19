import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Typography color="#783f8e"
      fontWeight={700}
      fontFamily='Dancing Script'
      sx={{ fontSize: { lg: "54px", xs: "30px" } }}
      mb="20px"
      textAlign="center">Our Misssion </Typography>
      <Box p="20px" ml="100px" mr="100px">
      <Typography variant="body2" color="text.secondary" letterSpacing= "1px">
        The mission of the snapshot page is to provide a platform for
        individuals and organizations to share their vision for how we can all
        work together to address climate change. We believe that climate change
        is a shared problem and that all of us have a role to play in solving
        it, whether it's by changing our own habits or by taking action through
        your community. We believe there are multiple ways we can achieve our
        goals around climate change, but we also recognize that everyone has
        different capacities and abilities. That's why we're starting with the
        individual level: people who want to make a difference in their own
        lives and communities. We hope that you'll share your own story—what's
        worked for you, what hasn't, how you've been able to find your way
        forward.
      </Typography>
      </Box>
    </Box>
  );
};

export default About;
