import React, { useState } from 'react';
import './app.scss';

import one from '../assets/eight/點數活動頁5-26.png';
import Prev from '../component/Prev_page/index';

import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Mom_page3() {
    return (
        <div className="scContainer">
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html">
                <Prev />
            </a>
            <div className="scContain">
                <div className="imageContainer1 ">
                    <LazyLoadImage src={one} alt="" />
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
