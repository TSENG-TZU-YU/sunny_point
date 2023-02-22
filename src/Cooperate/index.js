import { React, useState } from 'react';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/three/點數活動頁5-14.png';
import top2 from '../assets/three/點數活動頁5-15.png';

import './_page3.scss';

function Cooperate() {
    const [down, setDown] = useState(false);

    return (
        <div className="page3" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Exchang.html">
                <Prev />
            </a>

            <div className={`page-1 ${down ? '' : 'marginB'}`}>
                <img src={top1} alt="點數活動頁" />
                <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/" className="link01">
                    {''}
                </a>
                <a href="https://hamipoint.cht.com.tw/member/serialno" alt="/" className="link02">
                    {''}
                </a>
                <a href="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" alt="/" className="link03">
                    {''}
                </a>
                <div
                    className={`click`}
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>
            <div className={`page-2 ${down ? 'expandDown' : 'expandUp'}`}>
                <img src={top2} alt="點數活動頁" className={`${down ? 'expandDown' : 'expandUp'}`}/>
                <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/" className="link-01">
                    {''}
                </a>
                <a href="https://hamipoint.cht.com.tw/member/serialno" alt="/" className="link-02">
                    {''}
                </a>
                <a href="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" alt="/" className="link-03">
                    {''}
                </a>
            </div>
        </div>
    );
}

export default Cooperate;
