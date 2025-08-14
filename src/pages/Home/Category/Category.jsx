import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import image
import slide from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <SectionTitle
      subHeading={"From 11:00AM To 10:00PM"}
      heading={"Order Online"}      
      ></SectionTitle>  

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
            <img src={slide} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-24 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-24 text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-24 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-24 text-white">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-3xl uppercase text-center -mt-24 text-white">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
