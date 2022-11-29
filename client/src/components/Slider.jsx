import React, { useEffect } from "react";
import image1 from "../assets/images/j62.png";
import image2 from "../assets/images/j128.jpg";
import image3 from "../assets/images/j62.jpg";
function Slider() {
  useEffect(() => {
    let slideIndex = 0;
    showSlides(slideIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showSlides = (slideIndex) => {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
      showSlides(slideIndex);
    }, 4000);
  };
  return (
    <div className="p-[10px]">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item relative float-left w-full">
            <img
              src={image1}
              className="block w-full h-[500px]"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={image2} className="block w-full h-[500px]" alt="Camera" />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={image3}
              className="block w-full h-[500px]"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
