import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
    {
        "id": 1,
        "link": "ARE AWESOME",
        "image": "/assets/front/image/mainpage/01.svg",
    },
    {
        "id": 2,
        "link": "GIVE IT A SHOOT",
        "image": "/assets/front/image/mainpage/02.svg",
    },
    {
        "id": 3,
        "link": "GIVE IT A SHOOT",
        "image": "/assets/front/image/mainpage/03.svg",
    }
];

const MainSwiper = () => {
    return (
        <div className="w-full px-20 py-10 relative">
            <div className="w-full flex justify-center">
                <ul className="max-w-[1600px]">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={2}
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        {data.map(({ id, image, link }) => (
                            <SwiperSlide key={id}>
                                <Image
                                    width={500}
                                    height={300}
                                    src={image}
                                    alt="link"
                                />
                            </SwiperSlide>
                        ))}
                        {data.map(({ id, image, link }) => (
                            <SwiperSlide key={id}>
                                <Image
                                    width={500}
                                    height={300}
                                    src={image}
                                    alt="link"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>
        </div>
    )
}

export default MainSwiper;