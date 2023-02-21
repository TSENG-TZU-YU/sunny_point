import React, { useState } from 'react';
import './app.scss';

import top1 from '../assets/two/點數活動頁5-08.png';
import top2 from '../assets/two/點數活動頁5-09.png';
import one from '../assets/two/點數活動頁5-10.png';
import two from '../assets/two/點數活動頁5-11.png';
import three from '../assets/two/點數活動頁5-12.png';
import four from '../assets/two/點數活動頁5-13.png';

import { Link, animateScroll } from 'react-scroll';
import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Exchang() {
    return (
        <div className="exContainer">
           <Top />
           <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html">
                <Prev />
            </a>
            <div className="title">
                <div className="h1">點數兌換點數</div>
                <div className="line"></div>
            </div>
            <div className="nav">
                <div className="index ">
                    <LazyLoadImage src={top1} alt="" />
                </div>
                <div className="index ">
                    <LazyLoadImage src={top2} alt="" />
                </div>
            </div>
            <div className="exContain">
                <div className="imageContainer1 ">
                    <LazyLoadImage src={one} alt="" />
                    <a className="one" href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/">
                        {' '}
                    </a>
                </div>
                <div className="imageContainer1 mt">
                    <LazyLoadImage src={two} alt="" />
                </div>
                <div className="imageContainer1 mt exThree">
                    <LazyLoadImage src={three} alt="" />
                    <a href="https://www.sunnygo.com.tw/web-front/productDetails?id=240607" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/web-front/productDetails?id=240605" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/web-front/productDetails?id=232071" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/web-front/productDetails?id=232077" alt="/">
                        {' '}
                    </a>
                </div>
                <div className="imageContainer1 mt exFour">
                    <LazyLoadImage src={four} alt="" />
                    <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Cooperate.html" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Exchangemethod.html" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Numberview.html" alt="/">
                        {' '}
                    </a>
                    <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/">
                        {' '}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Exchang;
