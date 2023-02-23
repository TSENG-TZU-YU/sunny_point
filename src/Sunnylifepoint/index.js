import React from 'react';
import './_page6.scss';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/six/點數活動頁5-24.png';
import top2 from '../assets/six/點數活動頁5-25.png';

function Sunnylifepoint() {
    return (
        <div className="page6" id="top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html">
                <Prev />
            </a>
            {/* 特約店家消費折抵  賞利點綁定嘟嘟房停車 */}
            <div className="onePage">
                <div className="click">
                    <a href="#one">
                        <div className="clickBtn">特約店家消費折抵</div>
                    </a>
                    <a href="#two">
                        <div className="clickBtn">賞利點綁定嘟嘟房停車</div>
                    </a>
                    {/* <a href="#three">
                        <img src={top5} alt="點數活動頁" className="clickB" />
                    </a> */}
                </div>
            </div>
            <div className="twoTo">
                <img src={top1} alt="點數活動頁" id="one" />
                <a href="https://www.sunnygo.com.tw/static_custom/11m_active/cooperative.html" alt="/" className="to">
                    {''}
                </a>
            </div>
            <img src={top2} alt="點數活動頁" id="two" />
            <div id="three" className="three"></div>
        </div>
    );
}

export default Sunnylifepoint;
