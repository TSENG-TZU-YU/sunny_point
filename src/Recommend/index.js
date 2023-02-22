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
    const [pnClick, setClick] = useState(true);
    const [pnClick1, setClick1] = useState(false);
    const [pnClick2, setClick2] = useState(false);

    function five1() {
        if (pnClick === true) {
            setClick1(false);
            setClick2(false);
        }
        setClick(true);
    }
    function six1() {
        if (pnClick1 === true) {
            setClick(false);
            setClick2(false);
        }
    }

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
                <LazyLoadImage
                    src={five}
                    alt=""
                    className="btnIcon"
                    onClick={() => {
                        setClick(true);
                        setClick1(false);
                        setClick2(false);
                    }}
                />
                <LazyLoadImage
                    src={six}
                    alt=""
                    className="btnIcon"
                    onClick={() => {
                        setClick(false);
                        setClick1(true);
                        setClick2(false);
                    }}
                />
                <LazyLoadImage src={seven} alt="" className="btnIcon" />
            </div>
            {pnClick ? <LazyLoadImage src={two} alt="" className="btnIcon" /> : ''}
            {pnClick1 ? <LazyLoadImage src={three} alt="" className="btnIcon" /> : ''}
            {pnClick2 ? (
                <LazyLoadImage
                    src={four}
                    alt=""
                    className="btnIcon"
                    onClick={() => {
                        setClick(false);
                        setClick1(false);
                        setClick2(true);
                    }}
                />
            ) : (
                ''
            )}
        </div>
    );
}

export default Recommend;
