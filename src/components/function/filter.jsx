import React, { useState } from "react";
import introduceImg from "../../assets/list/introduce.png";

const topics = [
  {
    id: "23aer",
    title: "Introduce",
    lessons: [
      { id: "QwE193", title: "topic1", img: introduceImg },
      { id: "2", title: "topic2", img: introduceImg },
    ],
  },
  {
    id: "567ty",
    title: "Communication",
    lessons: [
      { id: "3", title: "topic1", img: introduceImg },
      { id: "4", title: "topic2", img: introduceImg },
    ],
  },
  {
    id: "4k7jj",
    title: "Skills",
    lessons: [
      { id: "5", title: "topic1", img: introduceImg },
      { id: "6", title: "topic2", img: introduceImg },
    ],
  },
];
const filter = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const displayedTopics = selectedTopic
    ? topics.filter((topic) => topic.id === selectedTopic)
    : topics;
  console.log(displayedTopics);

  // const displayedTopics = topics;
  return (
    <div>
      <h3>Choose a topic:</h3>
      <select onChange={handleTopicChange} value={selectedTopic}>
        <option value="">--Please choose an option--</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic.id}>
            {topic.title}
          </option>
        ))}
      </select>
      <h3>Filtered a topic:</h3>
      {displayedTopics.map((topic, topicIndex) => (
        <li key={topicIndex}>
          <h4>{topic.title}</h4>
          <ul>
            {topic.lessons.map((lesson, lessonIndex) => (
              <li key={lessonIndex}>
                <p>{lesson.title}</p>
                <img src={lesson.img} alt={lesson.title} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
};

export default filter;

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// const HIGH_SCORE = 80;

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
