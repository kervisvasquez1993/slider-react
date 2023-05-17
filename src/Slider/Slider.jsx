import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, EffectFade, Autoplay } from "swiper";

import SliderChild from "./SliderChild/SliderChild";
export const Slider = () => {
    return (
        <>
            <Swiper
                effect={"fade"}
                direction={"horizontal"}
                loop={true}
                speed={1000}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                    position: "left",
                    type: "bullets",
                }}
                modules={[Pagination, EffectFade, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {
                        <SliderChild
                            title={"Air"}
                            content={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                            }
                            background={"air.png"}
                        />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        <SliderChild
                            title={"Ocean"}
                            content={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                            }
                            background="ejemplo2.jpg"
                        />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        <SliderChild
                            title={"Ground"}
                            content={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                            }
                            background="ejemplo3.jpg"
                        />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    {
                        <SliderChild
                            title={"titulo 4"}
                            content={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                            }
                            background="red"
                        />
                    }
                </SwiperSlide>
            </Swiper>
        </>
    );
};
