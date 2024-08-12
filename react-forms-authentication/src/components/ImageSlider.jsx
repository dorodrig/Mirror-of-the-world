import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Img/img.avif";
import img2 from "../Img/img2.webp";
import img3 from "../Img/img3.jpg";
import img4 from "../Img/img4.jpg";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000, // 10 segundos por imagen
    arrows: true,
  };

  return (
    <>
    <div className="slider">
    <Slider {...settings}>
      <div>
      <img src={img1} alt="Imagen 1" style={{ width: "600px" }}/>
      </div>
      <div>
        <img src={img2}alt="Imagen 2" style={{ width: "600px" }} />
      </div>
      <div>
        <img src={img3}alt="Imagen 3" style={{ width: "600px" }} />
      </div>
      <div>
        <img src={img4} alt="Imagen 4" style={{ width: "600px" }} />
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}>
          ¡Únete a nuestra comunidad y comparte tus momentos especiales con el mundo!
        </div>
      </div>
    </Slider>
    </div>
    
    </>
    
  );
};

export default ImageSlider;
