import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import test from "../../Asset/image/11.png";

// Import CarouselCard
import CarouselCard from "../Component/CarouselCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./CarouselRoadmap.scss";
// import required modules
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { FreeMode } from "swiper";
import { Pagination } from "swiper";
function CarouselRoadmap() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="CarouselRoadmapContainer">
      <div className="CarouselHeading">
        <p className="CarouselDescription">Hành trình phát triển</p>
      </div>
      <Swiper
        effect="slide"
        navigation={true}
        modules={[Navigation, Autoplay, FreeMode, Pagination]}
        loop={true}
        pagination={pagination}
        // autoplay={{ delay: 300 }}
        speed={1000}
        pauseOnMouseEnter={true}
        touchReleaseOnEdges={true}
        // disableOnInteraction
        // freeMode={{ enabled: true, sticky: true }}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={30}
      >
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            image={test}
            title="12-09-2002"
            description="Theo kết quả được công bố bởi Diễn đàn Kinh tế Thế giới (WEF) trong Báo Cáo Cạnh tranh toàn cầu 2019, Singapore được nhận định là thị trường cạnh tranh nhất thế giới. Điều gì đã khiến một thương hiệu nhà thông minh Made in Vietna"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default CarouselRoadmap;
