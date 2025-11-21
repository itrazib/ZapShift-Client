import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  console.log(reviews);
  return (
    <div className="my-24">
      <div className="text-center ">
        <h1 className="text-[40px] font-bold  text-secondary">
          What our customers are sayings
        </h1>
        <p className="max-w-[832px] mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-20">
        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale:0.80,
            slideShadows: true,
          }}
          autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
