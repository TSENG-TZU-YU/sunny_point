import React, { useState } from 'react';
import './app.scss';

import one from '../assets/mom/0221如何成為團媽頁面＿切圖給小瑜-08.jpg';
import two from '../assets/mom/0221如何成為團媽頁面-06_02.jpg';
import three from '../assets/mom/0221如何成為團媽頁面-07_02.jpg';
import four from '../assets/mom/0221如何成為團媽頁面-08_02.jpg';
import five from '../assets/mom/查看推薦碼.png';
import six from '../assets/mom/推薦會員.png';
import seven from '../assets/mom/被推薦會員註冊.png';

import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Prev from '../component/Prev_page/index';

function Recommend() {
    return (
        <div className="reContainer">
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html">
                <Prev />
            </a>
            <div className="reContain">
                <div className="imageContainer1 ">
                    <LazyLoadImage src={one} alt="" />
                </div>
            </div>
            <div className="btnContain">
                <LazyLoadImage src={five} alt="" className="btnIcon" />
                <LazyLoadImage src={six} alt="" className="btnIcon" />
                <LazyLoadImage src={seven} alt="" className="btnIcon" />
            </div>
            <LazyLoadImage src={two} alt="" className="btnIcon" />

        </div>
    );
}

export default Recommend;
