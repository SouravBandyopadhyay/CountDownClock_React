import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    const timeDiff = new Date(targetDate) - new Date();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown">
      <div className="countdown-box">
        <div className="countdown-value">{remainingTime.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-value">{remainingTime.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-value">{remainingTime.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-value">{remainingTime.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
