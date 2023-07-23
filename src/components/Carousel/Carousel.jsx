import "../Carousel/Carousel.css"
import image1 from "../Assets/carousel1.avif"
import image2 from"../Assets/carousel2.avif"
import image3 from"../Assets/carousel3.avif"
import image4 from"../Assets/carousel4.avif"
import { useCallback, useMemo, useState } from "react"
import { useEffect } from "react"

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const images = useMemo(()=> [
      {
        url: image1,
        description: '15 Inch Touchscreen. A minimal interior aesthetic with all controls accessible on the central 15-inch touchscreen and the steering wheel.',
      },
      {
        url: image2,
        description: 'Spacious Cabin. The forward-designed instrument panel provides even more legroom in the front, for a spacious passenger cabin.',
      },
      {
        url: image3,
        description: 'Storage and Charging. The premium center console is modern and efficient, with plenty of covered storage and charging for two smartphones.',
      },
      {
        url: image4,
        description: 'Max Legroom. The back seat is very comfortable—with maximum legroom and beautiful views through the all-glass roof.',
      },
    ],[]);

    const handleNextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, [images]);
    
      const handleDotClick = (index) => {
        setActiveIndex(index);
      };
      useEffect(() => {
        const autoSlide = setInterval(handleNextSlide, 4200); // Change slide every 5 seconds
    
        return () => {
          clearInterval(autoSlide);
        };
      }, [activeIndex, handleNextSlide]);

  
    return (
      <div className="carousel">
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Slide ${index + 1}`}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <div className="carousel-descriptions">
          {images.map((image, index) => (
            <p
              key={index}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              {image.description}
            </p>
          ))}
        </div>
        <div className="navigation-bar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      </div>
    );
    
  };
  
  export default Carousel;