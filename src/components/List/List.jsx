import React, { useState } from "react";
import dataLesson from "../../data/Data";
import { Box } from "@mui/material";

const List = (topicName) => {
  const filterTopics = dataLesson.filter((topic)=>topic.id === topicName)
  console.log(filterTopics);

  return (
    <>
      <h3>All topic</h3>
      <ul>
        {dataLesson.map((topic, topicIndex) => (
          <li key={topicIndex}>
            <h4>{topic.title}</h4> //1
            <ul>
              {topic.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  <p>Lesson ID: {lesson.id}</p>
                  <p>Lesson Title: {lesson.title}</p>
                  <img src={lesson.img} alt={lesson.title} />
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
