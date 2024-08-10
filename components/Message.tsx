"use client"

import React, { useState } from "react";
import Grid from "@/components/Grid";

const Message = () => {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [showGrid, setShowGrid] = useState(false);

  const correctAnswers = {
    q1: ["ur gay", "youre gay", "you're gay", "a"],
    q2: ["fenghuang", "feng huang", "a"],
    q3: ["your worst enemy is yourself", "my worst enemy is myself", "a"],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const checkAnswers = () => {
    const isCorrect = Object.keys(correctAnswers).every((key) =>
      correctAnswers[key as keyof typeof correctAnswers].some(
        (answer) => answers[key as keyof typeof answers].toLowerCase() === answer.toLowerCase()
      )
    );

    if (isCorrect) {
      setShowGrid(true);
    } else {
      alert("Some answers are incorrect. Please try again.");
    }
  };

  return (
    <div className="flex flex-col relative z-10 mb-20 items-center justify-center" id="message">
      <h1 className="heading mt-20">
        A section dedicated to <span className="text-purple">family</span>
      </h1>
      <div className="my-10">
        <div className="mb-3">
          <label htmlFor="q1"> Guess woot; woot; ... </label>
          <input
            type="text"
            name="q1"
            value={answers.q1}
            onChange={handleChange}
            className="input-class relative z-20"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="q2"> Where did I get my one and only bracelet? (pinyin works) </label>
          <input
            type="text"
            name="q2"
            value={answers.q2}
            onChange={handleChange}
            className="input-class relative z-20"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="q3"> What was the main qute coach Brian always told me? (dont write the quotes) </label>
          <input
            type="text"
            name="q3"
            value={answers.q3}
            onChange={handleChange}
            className="input-class relative z-20"
          />
        </div>
        <button onClick={checkAnswers} className="button-class relative z-20">
          Submit
        </button>
      </div>

      {showGrid && <Grid />}
    </div>
  );
};

export default Message;
