import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/slide/image1.jpg';
import image2 from '../../../images/slide/image2.jpg';
import image3 from '../../../images/slide/image3.jpg';
import './CarouselShow.css';

const CarouselShow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mb-3">
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
     </div>
  );
};

export default CarouselShow;