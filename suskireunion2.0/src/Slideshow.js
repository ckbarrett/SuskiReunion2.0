import { useState, useEffect } from 'react';
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

function Slideshow() {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
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
  );
}

export default Slideshow;
