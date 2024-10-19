import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FormSelect from "../../components/FormSelect/FormSelect";
import ListTopic from "../../components/List/ListTopic";


import topics from "../../data/Data";


const TopicList = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };
  const displayedTopics = selectedTopic
    ? topics.filter((topic) => topic.id === selectedTopic)
    : topics;
  console.log(displayedTopics);

  return (
    <>
      <Typography variant="h2" sx={{ mb: "12px" }}>
        Hi, Olga777
      </Typography>
      <Box style={{ width: "100%" }}>
        <FormSelect
          handleChange={handleTopicChange}
          selectedTopic={selectedTopic}
          topics={topics}
        />

        <ListTopic displayed={displayedTopics} />
      </Box>
    </>
  );
};

export default TopicList;
{
  /* <Typography variant="h4" sx={{}}>
          All
        </Typography> */
}
