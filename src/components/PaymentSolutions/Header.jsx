import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Slider from "react-slick";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(()=>{
    if(typeof window !== undefined){
      setWindowWidth(window.innerWidth)
    }
  },[windowWidth])
  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowLeftCircleFill size={60} style={{ zIndex: 9999 }} />,
    prevArrow: <FaArrowCircleRight size={60} />,
  };
  return (
    <div>
        {windowWidth > 500 ? (
                <Slider {...settings}>

          <img src="/assets/img/banner1.jpg" alt="" />
          <img src="/assets/img/banner2.jpg" alt="" />
          <img src="/assets/img/banner3.jpg" alt="" />
          </Slider>

        ) : (
          <Slider {...settings}>

          <img src="/assets/img/banner-sm-1.jpg" alt="" />
          <img src="/assets/img/banner-sm-1.jpg" alt="" />
          <img src="/assets/img/banner-sm-1.jpg" alt="" />
          </Slider>

        )}
    </div>
  );
};

export default Header;
