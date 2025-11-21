import React from "react";
import salesIcon1 from "../../../assets/brands/amazon.png";
import salesIcon2 from "../../../assets/brands/amazon_vector.png";
import salesIcon3 from "../../../assets/brands/casio.png";
import salesIcon4 from "../../../assets/brands/moonstar.png";
import salesIcon5 from "../../../assets/brands/randstad.png";
import salesIcon6 from "../../../assets/brands/star.png";
import salesIcon7 from "../../../assets/brands/start_people.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";



const brands = [salesIcon1, salesIcon2, salesIcon3, salesIcon4, salesIcon5, salesIcon6, salesIcon7]

const SelesTeam = () => {

    
  return (


    <>
    <div className="my-8">
         <h1 className="text-secondary text-[28px] font-bold text-center mb-7">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
         modules={[Autoplay]}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
       
        
      >
      {
        brands.map(logo => <SwiperSlide>
            <img src={logo} alt="" />
        </SwiperSlide>)
      }
        
      </Swiper>
    </div>
    
    </>
    
  );
};

export default SelesTeam;
