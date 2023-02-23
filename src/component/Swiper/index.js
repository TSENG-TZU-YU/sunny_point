import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.scss';

import one from '../../assets/two/點數活動頁5-1-0-35.png';
import two from '../../assets/two/點數活動頁5-1-0-37.png';
import three from '../../assets/two/點數活動頁5-1-0-38.png';
import four from '../../assets/two/點數活動頁5-1-0-39.png';
import five from '../../assets/two/點數活動頁5-1-0-40.png';
import six from '../../assets/two/點數活動頁5-1-0-41.png';
import seven from '../../assets/two/點數活動頁5-1-0-42.png';
import eight from '../../assets/two/點數活動頁5-1-0-43.png';
const arr = [
    { img: one, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240607' },
    {
        img: two,
        a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240605',
    },
    { img: three, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232071' },
    { img: four, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232077' },
    { img: five, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232078' },
    { img: six, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232074' },
    { img: seven, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241205' },
    { img: eight, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241204' },
];

const SlideContainer = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="swiper-bar"
            style={{ width: '90%' }}
        >
            {arr.map((item, index) => {
                const { img, a } = item;
                return (
                    <div key={index}>
                        <SwiperSlide key={index}>
                            <img src={img} alt="" className="swiperImg" />
                            <a href={a}>{''}</a>
                        </SwiperSlide>
                    </div>
                );
            })}
        </Swiper>
    );
};
export default SlideContainer;
