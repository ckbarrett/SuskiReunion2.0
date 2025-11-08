import React, { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate);

    const update = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="timer">
      <div className="time-block">
        <span className="number">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-block">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-block">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-block">
        <span className="number">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;
