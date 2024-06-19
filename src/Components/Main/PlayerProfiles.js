// import React from 'react';
import React, { useState } from 'react';
import PlayerOne from '../Images/player-one.png';
import PlayerTwo from '../Images/player-two.png';
import PlayerThree from '../Images/player-three.png';
import PlayerFour from '../Images/player-four.png';
import '../../Styles/PlayerProfiles_Styles.css'

// create images in an array
const CarouselImages = [
    {src: PlayerOne, alt:'player one'},
    {src: PlayerTwo, alt:'Player two'},
    {src: PlayerThree, alt:'Player Three'},
    {src: PlayerFour, alt:'Player Four'},
]

//create carousel buttons and state
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? CarouselImages.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === CarouselImages.length - 1 ? 0 : prevIndex + 1));
    };
  
    // display heading and use map funtion to create ul for the images from the array to make up the carousel
    return (
        <div className="PlayerProfiles">
             <h2>PLAYER PROFILES</h2>
      <div className="carouselContainer">
        <button onClick={goToPrev}>Prev</button>
        <div className="carouselImage">
          {CarouselImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="carouselImages"
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <button onClick={goToNext}>Next</button>
      </div>
      </div>
    );
  };
  
export default Carousel;