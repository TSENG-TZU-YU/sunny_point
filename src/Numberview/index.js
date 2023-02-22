import { React, useState } from 'react';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/five/點數活動頁5-22.png';
import top2 from '../assets/five/點數活動頁5-23.png';

import './_page5.scss';

function Numberview() {
    const [down, setDown] = useState(false);

    return (
        <div className="page5" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Exchang.html">
                <Prev />
            </a>

            <div className={`page-01 ${down ? '' : 'marB'}`}>
                <img src={top1} alt="點數活動頁" />
                <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/" className={`link1`}>
                    {''}
                </a>
                <a href="https://hamipoint.cht.com.tw/member/serialno" alt="/" className={`link2`}>
                    {''}
                </a>
                <a href="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" alt="/" className={`link3`}>
                    {''}
                </a>
                <div
                    className={`clicked`}
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>
            <div className={`page-02 ${down ? 'down' : 'up'}`}>
                <img src={top2} alt="點數活動頁" className={`${down ? 'down' : 'up'}`} />
                <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/" className="linkOne">
                    {''}
                </a>
                <a href="https://hamipoint.cht.com.tw/member/serialno" alt="/" className="linkTwo">
                    {''}
                </a>
                <a href="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" alt="/" className="linkThr">
                    {''}
                </a>
            </div>
        </div>
    );
}

export default Numberview;
