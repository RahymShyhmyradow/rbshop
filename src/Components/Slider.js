import React from "react";
import Slider from "react-slick";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows:false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="mx-auto mt-5">
      <Slider {...settings} >
        <div>
          <img src="https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..v1583853669.jpg" className="w-screen slider-img cursor-pointer"/>
        </div>
        <div className="">
          <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-screen slider-img cursor-pointer" />
        </div>
        <div className="">
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear.jpg?v=1644836883" className="w-screen slider-img cursor-pointer" />
        </div>
      </Slider>
    </div>
  );
}