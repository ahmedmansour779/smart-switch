import { useSelector } from "react-redux";
import { ourClientData } from "../../../data/ourClient";
// Import Swiper React components
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function OurClient() {
    const { ourClients } = useSelector((state) => state.translations.translations)
    return (
        <div className="flex flex-col gap-8 items-center py-12">
            <h1 className="text-4xl font-medium">
                {ourClients}
            </h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

                className='md:w-1/2 w-full  overflow-hidden'
            >
                {
                    ourClientData.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='w-fit'>
                                <img className="w-fit" src={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
