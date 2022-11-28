import React from "react";
import "./Windows.css";
import Modal from "./Modal";
import questions from "../questions.json";

const Window = (props) => {
  let day = props.number;
  let introduction = questions[day]["introduction"];
  let question = questions[day]["question"];
  let answerOne = questions[day]["answerOne"];
  let answerTwo = questions[day]["answerTwo"];
  let answerThree = questions[day]["answerThree"];
  let correctAnswer = questions[day]["correctAnswer"];

  return (
    <div className="window">
      <Modal
        number={day}
        introduction={introduction}
        question={question}
        answerOne={answerOne}
        answerTwo={answerTwo}
        answerThree={answerThree}
        correctAnswer={correctAnswer}
        className="number"
      ></Modal>
    </div>
  );
};

export default Window;
