// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({
  numberOfSlide = 1,
  category = "Trending",
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(
      "https://6628fc3354afcabd0737b74a.mockapi.io/Movie"
    );
    console.log(response.data);
    setMovies(response.data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={numberOfSlide}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={autoplay ? [Pagination, Autoplay] : Pagination}
        className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}
      >
        {/* movie => Swiperslide*/}
        {/*cứ mỗi movie trong movies thì biến nó thành SwiperSlide */}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
