import React from 'react';
import { Link } from 'react-router-dom';

import './_page4.scss';

import Top from '../component/top/Top';
import top1 from '../assets/four/點數活動頁5-16.png';
import top2 from '../assets/four/點數活動頁5-17.png';
import top3 from '../assets/four/點數活動頁5-18.png';
import top4 from '../assets/four/點數活動頁5-19.png';
import top5 from '../assets/four/點數活動頁5-20.png';
import top6 from '../assets/four/點數活動頁5-21.png';

function Page4() {
    return (
        <div className="page4" id="#top">
            <Top />

            <div className="onePage">
                <div>回上一頁</div>
                <div className="title">點數序號兌換方式</div>
                <div className="click">
                    <a href="#one">
                        <img src={top1} alt="點數活動頁" className="clickBtn" />
                    </a>
                    <a href="#two">
                        <img src={top2} alt="點數活動頁" className="clickBtn" />
                    </a>
                    <a href="#three">
                        <img src={top3} alt="點數活動頁" className="clickBtn" />
                    </a>
                </div>
            </div>
            <div className="one1">
                <img src={top4} alt="點數活動頁" className="one" id="one" />
                <Link to="https://www.sunnygo.com.tw/web-front/pointExchange" className="link-1"></Link>
            </div>
            <div className="one2">
                <img src={top5} alt="點數活動頁" className="two" id="two" />
                <Link to="https://hamipoint.cht.com.tw/member/serialno" className="link-2"></Link>
            </div>
            <div className="one3">
                <img src={top6} alt="點數活動頁" className="three" id="three" />
                <Link to="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" className="link-3"></Link>
            </div>
        </div>
    );
}

export default Page4;
