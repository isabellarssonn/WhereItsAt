import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate, useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './navSwiper.css'

function NavSwiper() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;

    if (index === 0) navigate('/');
    if (index === 1) navigate('/event');
    if (index === 2) navigate('/tickets');
  };

  const getSlideIndex = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/event':
        return 1;
      case '/tickets':
        return 2;
      default:
        return 0; 
    }
  };

  return (
    <div className="nav-swiper-wrapper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: false }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        touchEventsTarget="container"
        allowTouchMove={true}
        initialSlide={getSlideIndex()}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default NavSwiper