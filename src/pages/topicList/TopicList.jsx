import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import InputTextFields from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";
import topics from "../../data/Data";

const TopicList = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicChange = (e) => {
   setSelectedTopic(e.target.value);
  };
  const displayedTopics = selectedTopic
    ? topics.filter((topic) => topic.id === selectedTopic)
    : topics;
  console.log(displayedTopics);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Hi, Maria
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        What topic do you want to learn?
      </Typography>
      <div style={{ width: "100%" }}>
        <Select
          handleChange={handleTopicChange}
          selectedTopic={selectedTopic}
          topics={topics}
        />
        <List displayed={displayedTopics} />
      </div>
    </>
  );
};

export default TopicList;
