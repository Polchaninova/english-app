import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box"; // Add this import

import DataTopic from '../../data/Data'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, topicName, theme) {
  return {
    fontWeight: topicName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SelectTopic() {

  const theme = useTheme();
  const [topicName, setTopicName] = React.useState([]);

  const handleChange = (event) => {
    setTopicName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Topic</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={topicName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {DataTopic.map((name) => (
            <MenuItem
              key={name.id}
              value={name.title}
              style={getStyles(name.title, topicName, theme)}
            >
              {name.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
