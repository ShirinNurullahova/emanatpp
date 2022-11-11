import React from 'react'
import '../../UniComponents/UniMain/Uni.scss'
import uni1 from '../../../../src/assets/img/shirin/uni1.png'
import uni2 from '../../../../src/assets/img/shirin/uni2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


const UniMain = () => {
    return (
        <div className='uni_main'>
            <div className='uni_main_up'>
                <div className='uni_main_up_head'>
                    <h1><span>Gələcəyimizi</span> birgə inkişaf edirik</h1>
                </div>
                <div className='uni_main_up_text'>
                    <p>Karyera sərgilərinin bir parçasıyıq.</p>
                </div>
            </div>
            <div className="uni_main_slider">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    // slidesPerColumn={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="uni_main_slider_swiper">
                            <div className="uni_main_slider_swiper_head">
                                <span>BDU</span>
                            </div>
                            <div className="uni_main_slider_swiper_img">
                                <img src={uni1} />
                            </div>
                            <div className="uni_main_slider_swiper_text">
                                <p>
                                    Nam consectetur interdum arcu, et varius orci suscipit vel.
                                    Maecenas ultrices ligula ornare laoreet euismod. Nullam viverra, sem a semper varius, neque nunc blandit tortor,
                                    id lobortis odio tortor ac urna. Phasellus consectetur ante nec tellus ornare commodo.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="uni_main_slider_swiper">
                            <div className="uni_main_slider_swiper_head">
                                <span>BMA</span>
                            </div>
                            <div className="uni_main_slider_swiper_img">
                                <img src={uni1} />
                            </div>
                            <div className="uni_main_slider_swiper_text">
                                <p>
                                    Nam consectetur interdum arcu, et varius orci suscipit vel.
                                    Maecenas ultrices ligula ornare laoreet euismod. Nullam viverra, sem a semper varius, neque nunc blandit tortor,
                                    id lobortis odio tortor ac urna. Phasellus consectetur ante nec tellus ornare commodo.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="uni_main_slider_swiper">
                            <div className="uni_main_slider_swiper_head">
                                <span>ADA</span>
                            </div>
                            <div className="uni_main_slider_swiper_img">
                                <img src={uni2} />
                            </div>
                            <div className="uni_main_slider_swiper_text">
                                <p>
                                    Nam consectetur interdum arcu, et varius orci suscipit vel.
                                    Maecenas ultrices ligula ornare laoreet euismod. Nullam viverra, sem a semper varius, neque nunc blandit tortor,
                                    id lobortis odio tortor ac urna. Phasellus consectetur ante nec tellus ornare commodo.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default UniMain