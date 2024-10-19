import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MySelect from "../UI/MySelect/MySelect";
import { Typography } from "@mui/material";

function FormSelect({ handleChange, selectedTopic, topics }) {
  return (
    <>
      <Typography variant="body2" sx={{ mb: "8px" }}>
        What topic do you want to learn?
      </Typography>
      <FormControl sx={{ width: 240 }}>
        <InputLabel id="demo-multiple-name-label">
          Category
        </InputLabel>
        <MySelect
          selectedTopic={selectedTopic}
          handleChange={handleChange}
          topics={topics}
        />
      </FormControl>
    </>
  );
}
export default FormSelect;
