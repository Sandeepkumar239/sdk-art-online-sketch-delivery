import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "I recently purchased a charcoal artwork from [Your Website Name], and I must say, it has exceeded all my expectations. The attention to detail and level of craftsmanship is truly remarkable. Every stroke and texture created with charcoal showcases the artist's talent and dedication to their craft.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "I recently ordered a sketch from sdk-art, and I am extremely pleased with both the artwork and the service provided. The sketch exceeded my expectations, showcasing incredible attention to detail and exceptional talent. The entire process, from browsing the website to receiving the securely packaged artwork, was seamless. I highly recommend sdk-art for their top-notch artwork and excellent service."





        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "I recently ordered a colored sketch from sdk-art and I am thrilled with the result. The level of detail and the vibrant colors used in the sketch are truly remarkable. The sketch captures the subject beautifully, and it has become a cherished piece in my collection. The ordering process was smooth, and the artwork arrived securely packaged. I highly recommend sdk-art for their exceptional colored sketches and reliable service."





        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
