import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './imgSlide.css'

const images = [
  "https://www.ucom.am/storage/files/levelup-india-russia.png-2720x_-quality(75)-webp(80)-o(png).webp?token=624e9282626d227efcc208b3ba9bfa9c",
  "https://www.ucom.am/storage/files/mobile-id-web-01-1.png-2720x_-quality(75)-webp(80)-o(png).webp?token=53b41d44cb1aa1121c55965174a7cd0c",
  "https://www.ucom.am/storage/files/utravel-2720x1080-arm.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=713349e5b28ffb3d365c958ce0d62b56",
  "https://www.ucom.am/storage/files/nor-tarva-kino-2720x1080.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=44fcad191687d25efef2a12f6eaa14e0",
  "https://www.ucom.am/storage/files/unity-new-year-web-ph-web-arm.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=3c9eba8d124f62d0233e857ddfa5512e",
];

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
