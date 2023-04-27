import React, { useState, useEffect } from "react";
import Question from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
