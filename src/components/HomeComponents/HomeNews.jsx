import { Swiper, SwiperSlide } from "swiper/react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import data from '../NewsComponents/News.json'
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/autoplay'

const HomeNews = () => {
    return (
        <section className='home-news-section'>
            <div className="home-news-section-heading">
                <div className="home-news-section-heading-text">
                    <p>ən son xəbərlər</p>
                </div>

                <div className="home-news-section-heading-button">
                    <a href="/news">Hamsına Bax</a>
                </div>
            </div>

            <div className="home-news-section-container">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 900,
                        disableOnInteraction: true,
                    }}
                    slidesPerView={3}
                    // slidesPerColumn={2}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="mySwiper2"
                >
                    {data.map((item) => {
                        return (

                            <SwiperSlide>
                                <Link to={`news/${item.id}`}>
                                <HomeCard item={item}/>
                                </Link>
                         
                            </SwiperSlide>
                        )
                    })}


                </Swiper>

            </div>
        </section>
    )
}

export default HomeNews