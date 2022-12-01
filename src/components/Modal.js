import React from "react";
import Popup from "reactjs-popup";
import "./Modal.css";

const Modal = (props) => {
  let answerOne = props.answerOne;
  let answerTwo = props.answerTwo;
  let answerThree = props.answerThree;
  let correctAnswer = props.correctAnswer;
  let number = props.number;

  const handleClickOne = (event) => {
    if (answerOne === correctAnswer) {
      event.currentTarget.classList.add("correct");
    } else {
      event.currentTarget.classList.add("wrong");
    }
  };

  const handleClickTwo = (event) => {
    if (answerTwo === correctAnswer) {
      event.currentTarget.classList.add("correct");
    } else {
      event.currentTarget.classList.add("wrong");
    }
  };

  const handleClickThree = (event) => {
    if (answerThree === correctAnswer) {
      event.currentTarget.classList.add("correct");
    } else {
      event.currentTarget.classList.add("wrong");
    }
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');

  let isDay = false;
  if (Number(dd) < Number(number) && Number(mm) === 12) {
    console.log(Number(mm));
    isDay = true;
  }

  return (
    <Popup
      trigger={<button className="button" disabled={isDay}>{props.number}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Día {props.number}</div>
          <div className="content">
            {" "}
            {props.introduction}
            <br />
            {props.question}
          </div>
          <div className="actions">
            <button className="option" onClick={handleClickOne} type="button">
              {props.answerOne}
            </button>
            <button className="option" onClick={handleClickTwo} type="button">
              {props.answerTwo}
            </button>
            <button className="option" onClick={handleClickThree} type="button">
              {props.answerThree}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;
