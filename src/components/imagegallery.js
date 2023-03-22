import React, { useState } from "react";
import "../css/imageGallery.css"
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpeg";
import img11 from "../assets/gallery/img11.jpeg";
import img12 from "../assets/gallery/img12.jpeg";


const imagesArray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];


const ImageGallery = () => {
  const [images, setImages] = useState(imagesArray);

  return (
    <div className="image-gallery">
    <ul className="image-container">
  {images.map((image, index) => (
    <li key={index}><img src={image} alt={`Imagen ${index}`} /></li>
  ))}
</ul>
    </div>
  );
};

export default ImageGallery;
