"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2023-10-21");
  return (
    <Countdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-300"
    />
  );
};

export default CountDown;
