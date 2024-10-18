import React, { useState } from "react";
// import { Box } from "@mui/material";

const List = ({displayed}) => {

  return (
    <>
      <h3>Filtered a topic:</h3>
      <ul>
        {displayed.map((topic, topicIndex) => (
          <li key={topicIndex}>
            <h4>{topic.title}</h4>
            <ul>
              {topic.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  <img src={lesson.img} alt={lesson.title} />
                  <p>{lesson.title}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
