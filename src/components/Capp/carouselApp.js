import React from "react";
import img1 from "../../assets/logosmarcas/ate.jpg";
import img2 from "../../assets/logosmarcas/bosch.jpg";
import img3 from "../../assets/logosmarcas/trw.jpg";
import img4 from "../../assets/logosmarcas/Varga.png";
import Carousel from "react-bootstrap/Carousel";

function carouselApp() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={img1}
          alt="ATE"
          style={{ width: "100px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={img2}
          alt="Bosch"
          style={{ width: "300px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}> 
        <img
          className="d-block "
          src={img3}
          alt="TRW"
          style={{ width: "250px" }}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block "
          src={img4}
          alt="VARGA"
          style={{ width: "250px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselApp;
