"use client";

import React, { useState } from "react";
import Grid from "@/components/Grid";
import Gift from "./Gift";
import Confetti from "../public/confetti.gif"; // Import GIF correctly

const Message = () => {
  const [answers, setAnswers] = useState({ q1: "enter your answer here", q2: "enter your answer here", q3: "enter your answer here" });
  const [showGrid, setShowGrid] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gifPlayed, setGifPlayed] = useState(false);

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
      if (!gifPlayed) {
        setShowConfetti(true);
        setGifPlayed(true);
        setTimeout(() => setShowConfetti(false), 1500);
      }
    } else {
      alert("Some answers are incorrect. Please try again.");
    }
  };

  return (
    <div className="flex flex-col relative z-10 mb-20 items-center justify-center" id="message">
      <h1 className="heading mt-20 mb-10">
        A section dedicated to <span className="text-purple">family</span>
      </h1>
      <div className="my-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-row justify-between w-full">
          <div className="mb-6 text-center w-full mx-2">
            <label htmlFor="q1" className="block text-lg font-semibold mb-2 text-purple"> Guess woot? <br/> woot. </label>
            <input
              type="text"
              name="q1"
              value={answers.q1}
              onChange={handleChange}
              className="text-center input-class relative z-20 w-full"
            />
          </div>
          <div className="mb-6 text-center w-full mx-2">
            <label htmlFor="q2" className="block text-lg font-semibold mb-2 text-purple"> Where did I get my one and only bracelet? (pinyin works) </label>
            <input
              type="text"
              name="q2"
              value={answers.q2}
              onChange={handleChange}
              className="text-center input-class relative z-20 w-full"
            />
          </div>
          <div className="mb-6 text-center w-full mx-2">
            <label htmlFor="q3" className="block text-lg font-semibold mb-2 text-purple"> What was the main quote coach Brian always told me? (don&apos;t write the quotes) </label>
            <input
              type="text"
              name="q3"
              value={answers.q3}
              onChange={handleChange}
              className="text-center input-class relative z-20 w-full"
            />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            onClick={checkAnswers}
            className="border-2 border-white px-8 py-3 rounded-xl mx-auto mt-10 flex justify-center button-class relative z-20"
          >
            Submit
          </button>
          {showConfetti && (
            <img
              src={Confetti.src} // Use imported GIF directly
              alt="Confetti"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                zIndex: 10,
              }}
            />
          )}
        </div>
      </div>

      {showGrid && (
        <div className="w-full mt-10">
            <Gift />
            <Grid />
        </div>
      )}
    </div>
  );
};

export default Message;
