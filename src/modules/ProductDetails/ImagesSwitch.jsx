/* eslint-disable react/prop-types */
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { imagesSwitchData } from "../../data/imagesSwitchData";
import "../../styles/swiperDetailsProductPage.css";

export default function ImagesSwitch({ product }) {
    console.log(product);
    const [image, setImage] = useState(null)

    return (
        <div className="flex flex-col items-center gap-12 w-full py-8">
            <img
                className="h-72 w-auto"
                src={image ? image : product.image}
                alt={product.title} />
            <div
                className="!w-full"
            >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    controller
                    loop
                    keyboard={{
                        enabled: true,
                    }}
                    modules={[Navigation, Keyboard]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {
                        imagesSwitchData.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className="border border-solid border-gray-200 rounded-md p-2"
                                    onClick={() => setImage(item)}>
                                    <img
                                        src={item}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="swiper-button-next right-0">
                        <IconArrowRight size={20} />
                    </div>
                    <div className="swiper-button-prev left-0">
                        <IconArrowLeft />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
