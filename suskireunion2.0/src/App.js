import React, { useState, useEffect } from 'react';
import './App.css';
import family from './assets/family.jpg';
import dave from './assets/dave.jpg';
import barrett from './assets/barrettfam.jpg';
import avery from './assets/avery.jpg';
import amanda from './assets/amanda.png';
import barrettfam2 from './assets/barrettfam2.JPG';
import chefing from './assets/chefing.JPG';
import davefam from './assets/davefam.jpg';
import davegrandkids from './assets/davegrandkids.jpg';
import drinks from './assets/drinks.JPG';
import eltonbirthday from './assets/eltonbirthday.JPG';
import fishing from './assets/fishing.JPG';
import kids from './assets/kids.jpg';
import littledavefam from './assets/littledavefam.jpg';
import lori from './assets/lori.JPG';
import morekids from './assets/morekids.JPG';
import oldies from './assets/oldies.jpg';
import ronelton from './assets/ronelton.JPG';
import ronfam from './assets/ronfam.JPG';
import shuffling from './assets/shuffling.JPG';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    family,
    dave,
    barrett,
    avery,
    amanda,
    barrettfam2,
    chefing,
    davefam,
    davegrandkids,
    drinks,
    eltonbirthday,
    fishing,
    kids,
    littledavefam,
    lori,
    morekids,
    oldies,
    ronelton,
    ronfam,
    shuffling
  ];

  useEffect(() => {
    const targetDate = new Date('August 8, 2025 17:00:00 EDT');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="App">
      <nav className="navigation">
        <div className="nav-links">
          <a href="#countdown">Countdown</a>
          <a href="#pictures">Pictures</a>
          <a href="https://fivehillsrealty.guestybookings.com/en/properties/67cdea3318e11c0012191190">Listing</a>
          <a href="https://youtu.be/aAU0qq-DHy0">Video</a>
          
        </div>
      </nav>
      
      <div className="countdown-container" id="countdown">
        <div className="event-info">
          <h1 className="title">Suski Family Reunion</h1>
          <h2 className="subtitle">Ocean Isle Beach, NC</h2>
        </div>
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
      </div>

      <div className="slideshow-section" id="pictures">
        <div className="slideshow-container">
          <img 
            src={slides[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="slideshow-image"
          />
          <div className="slideshow-dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
