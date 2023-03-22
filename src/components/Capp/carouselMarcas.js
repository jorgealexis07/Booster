import React from "react";
import img1 from "../../assets/logosmarcas/audi.png";
import img2 from "../../assets/logosmarcas/BMW.png";
import img3 from "../../assets/logosmarcas/Chevrolet-logo.png";
import img4 from "../../assets/logosmarcas/Nissan_logo.png";
import img5 from "../../assets/logosmarcas/seat.png";
import img6 from "../../assets/logosmarcas/vw.jpg";
import Carousel from "react-bootstrap/Carousel";

function carouselMarcas() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={img1} 
          alt="Audi"
          style={{ width: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={img2}
          alt="Bmw"
          style={{ width: "100px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={img3}
          alt="chevrolet"
          style={{ width: "250px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={img4}
          alt="Nissan"
          style={{ width: "150px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={img5}
          alt="SEAT"
          style={{ width: "150px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={img6}
          alt="VW"
          style={{ width: "125px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselMarcas;
