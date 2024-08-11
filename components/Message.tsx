"use client"

import React, { useState } from "react";
import Grid from "@/components/Grid";

const Message = () => {
  const [answers, setAnswers] = useState({ q1: "enter your answer here", q2: "enter your answer here", q3: "enter your answer here" });
  const [showGrid, setShowGrid] = useState(false);

  const correctAnswers = {
    q1: ["ur gay", "youre gay", "you're gay", "a"],
    q2: ["fenghuang", "feng huang", "fenghuangcheng", "feng huang cheng", "a"],
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
      <div className="my-10 w-full max-w-md mx-auto">
        <div className="mb-6 text-center">
          <label htmlFor="q1" className="block text-lg font-semibold mb-2 text-purple"> Guess woot? woot. ... </label>
          <input
            type="text"
            name="q1"
            value={answers.q1}
            onChange={handleChange}
            className="text-center input-class relative z-20"
          />
        </div>
        <div className="mb-6 text-center">
          <label htmlFor="q2" className="block text-lg font-semibold mb-2 text-purple"> Where did I get my one and only bracelet? (pinyin works) </label>
          <input
            type="text"
            name="q2"
            value={answers.q2}
            onChange={handleChange}
            className="text-center input-class relative z-20"
          />
        </div>
        <div className="mb-6 text-center">
          <label htmlFor="q3" className="block text-lg font-semibold mb-2 text-purple"> What was the main quote coach Brian always told me? (don&apos;t write the quotes) </label>
          <input
            type="text"
            name="q3"
            value={answers.q3}
            onChange={handleChange}
            className="text-center input-class relative z-20"
          />
        </div>
        <button onClick={checkAnswers} className="mx-auto flex justify-center button-class relative z-20">
          Submit
        </button>
      </div>

      {showGrid && <Grid />}
    </div>
  );
};

export default Message;
