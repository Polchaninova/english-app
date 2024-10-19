import React from "react";
import StartImg from "../../assets/woman.png";
// import StyledBox from '../../components/ThemeYellow/';
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

function Start() {
  return (
    <Box
      align="center"
    >
      <Box component="img" src={StartImg} alt="React Logo" sx={{ mb: 2 }}></Box>
      <Typography
        variant="h1"
        sx={{
          mb: 4,
        }}
      >
        Start your journey to job success today!
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
export default Start;
