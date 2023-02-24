import React, { useState } from 'react';
import './app.scss';

// import one from '../assets/mom/0221如何成為團媽頁面-09.jpg';

import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IoIosArrowForward } from 'react-icons/io';

function Mom_page3() {
    return (
        <div className="gbContainer">
            <a href="https://www.sunnygo.com.tw/web-front/home">
                <div className="prev">
                    陽信商店街購物
                    <IoIosArrowForward />
                </div>
            </a>
            <div className="gbContain">
                <div className="imageContainer1 ">
                    {/* <LazyLoadImage src={one} alt="" /> */}
                    <LazyLoadImage src='images/0221如何成為團媽頁面-09.jpg' alt="" />
                    <a
                        className="one"
                        href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html"
                        alt="/"
                    >
                        {' '}
                    </a>
                    <a className="one" href="https://www.sunnygo.com.tw/web-front/home" alt="/">
                        {' '}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mom_page3;
