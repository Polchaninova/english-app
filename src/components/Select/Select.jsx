import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

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
function getStyles(topic, selectedTopic, theme) {
  return {
    fontWeight: selectedTopic.includes(topic)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}
function SelectTopic({ handleChange, selectedTopic, topics }) {
  const theme = useTheme();

  return (
    <>
      <h3>Choose a topic:</h3>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">topic</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={selectedTopic}
          onChange={handleChange}
          input={<OutlinedInput label="Topic" />}
          MenuProps={MenuProps}
        >
          {topics.map((topic, index) => (
            <MenuItem
              key={index}
              value={topic.id}
              style={getStyles(topic, selectedTopic, theme)}
            >
              {topic.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
export default SelectTopic;











     {
       /* <select onChange={handleChange} value={selectedTopic}>
        <option value="">--Please choose an option--</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic.id}>
            {topic.title}
          </option>
        ))}
      </select> */
     }
     {
       /* native-select */
     }
     {
       /* <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={value}
          onChange={handleChange}
          label="Native"
          inputProps={{
            id: "select-multiple-native",
          }}
        >
          {topics.map((topic, index) => (
            <option key={index} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </Select>
      </FormControl> */
     }
     {
       /*! first simple */
     }
     {
       /* <select onChange={handleChange} value={value}>
        <option value="">--Please choose an option--</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic.id}>
            {topic.title}
          </option>
        ))}
      </select> */
     }