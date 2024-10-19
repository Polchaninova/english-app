import { useTheme } from "@emotion/react";
import { MenuItem, OutlinedInput, Select } from "@mui/material";

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

const MySelect = ({ selectedTopic, handleChange, topics }) => {
  const theme = useTheme();
  return (
    <>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={selectedTopic}
        onChange={handleChange}
        input={<OutlinedInput label="Topic" />}
        MenuProps={MenuProps}
        sx={{ mb: "40px" , background:'#fff'}}
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
    </>
  );
};

export default MySelect;



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