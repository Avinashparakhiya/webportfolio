import React, { useRef, useState } from "react";
import "./Testimonial.css";
import IMG1 from "../../assetes/photo2.jpg";
import IMG2 from "../../assetes/photo2.jpg";
import IMG3 from "../../assetes/photo2.jpg";
import IMG4 from "../../assetes/photo2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: IMG1,
    name: "Hello World",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum distinctio dicta quas consequatur quis quaerat",
  },
  {
    avatar: IMG2,
    name: "Hello World",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum distinctio dicta quas consequatur quis quaerat",
  },
  {
    avatar: IMG3,
    name: "Hello World",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum distinctio dicta quas consequatur quis quaerat",
  },
  {
    avatar: IMG4,
    name: "Hello World",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum distinctio dicta quas consequatur quis quaerat",
  },
  {
    avatar: IMG1,
    name: "Hello World",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum distinctio dicta quas consequatur quis quaerat",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review Of Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container" spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

{
  /* <article className="testimonials">
<div className="client_avatar">
  <img src={IMG1} alt="IMG1" />
</div>
<h5 className="client_name">Ernest Achiever</h5>
<small className="client_review">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
  distinctio dicta quas consequatur quis quaerat?
</small>
</article> */
}
