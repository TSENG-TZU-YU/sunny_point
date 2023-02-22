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
import Top from '../component/top/Top';

function Recommend() {
    const [pnClick, setClick] = useState(1);

    return (
        <div className="reContainer">
             <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/MomPlan.html">
                <Prev />
            </a>
            <div className="reContain">
                <div className="imageContainer1 ">
                    <LazyLoadImage src={one} alt="" />
                </div>
            </div>
            <div className="btnContainer">
                <div className="btnContain">
                    <div className="btnIcons">
                        <LazyLoadImage
                            src={five}
                            alt=""
                            className={`btnIcon ${pnClick === 1 ? 'active' : ''}`}
                            onClick={() => {
                                setClick(1);
                            }}
                        />
                    </div>
                    <div className="btnIcons">
                        <LazyLoadImage
                            src={six}
                            alt=""
                            className={`btnIcon ${pnClick === 2 ? 'active' : ''}`}
                            onClick={() => {
                                setClick(2);
                            }}
                        />
                    </div>

                    <div className="btnIcons">
                        <LazyLoadImage
                            src={seven}
                            alt=""
                            className={`btnIcon ${pnClick === 3 ? 'active' : ''}`}
                            onClick={() => {
                                setClick(3);
                            }}
                        />
                    </div>
                </div>
            </div>
            <LazyLoadImage src={two} alt="" className={`btnIcon ${pnClick === 1 ? 'pageActive' : 'pageNone'}`} />
            <LazyLoadImage src={three} alt="" className={`btnIcon ${pnClick === 2 ? 'pageActive' : 'pageNone'}`} />
            <LazyLoadImage src={four} alt="" className={`btnIcon ${pnClick === 3 ? 'pageActive' : 'pageNone'}`} />
        </div>
    );
}

export default Recommend;
