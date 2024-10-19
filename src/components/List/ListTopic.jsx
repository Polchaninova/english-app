import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";

import MyListItem from "../UI/MyListItem/MyListItem";

const ListTopic = ({ displayed }) => {
  return (
    <Box>
      <List>
        {displayed.map((topic, topicIndex) => (
          <Box key={topicIndex}>
            <Typography
              variant="h3"
              sx={{
                background: "#4CBBFF",
                color: "#fff",
                width: "100%",
                pt: "10px",
                pb: "10px",
                borderRadius:"4px",
                textAlign: "center",
              }}
            >
              {topic.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:"center"}}>
              <MyListItem topic={topic} />
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ListTopic;
// <Box
//   component="img"
//   src={StartImg}
//   alt="React Logo"
//   sx={{ mb: 2 }}
// ></Box>;
