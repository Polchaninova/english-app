import React from "react";
import StartImg from "../../assets/woman.png";
import { Box, Typography, Button, ThemeProvider, createTheme } from "@mui/material";

function Start() {
  return (
    <ThemeProvider theme={theme}>
      <Box align="center" sx={{ pt: 20, pb: 20 }}>
        <Box
          component="img"
          src={StartImg}
          alt="React Logo"
          sx={{ mb: 2 }}
        ></Box>

        <Typography component="h3" variant="h3" color="primary" sx={{ mb: 4 }}>
          Welcome to JobFluent
        </Typography>

        <Button variant="contained">Log In</Button>
      </Box>
    </ThemeProvider>
  );
}
export default Start;
