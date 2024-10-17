import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import InputTextFields from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";

const TopicList = () => {

  return (
    <>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Hi, Maria
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        What topic do you want to learn?
      </Typography>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Select />
        </Box>
        <List />
      </div>
    </>
  );
};

export default TopicList;
