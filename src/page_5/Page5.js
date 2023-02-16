import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/five/點數活動頁5-22.png';
import top2 from '../assets/five/點數活動頁5-23.png';

import './_page5.scss';

function Page5() {
    const [down, setDown] = useState(false);

    return (
        <div className="page5" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/web-front/#/activePanel?id=7">
                <Prev />
            </a>

            <div className="page-01">
                <img src={top1} alt="點數活動頁" />
                <Link to="https://www.sunnygo.com.tw/web-front/pointExchange" className={`link1`}></Link>
                <Link to="https://hamipoint.cht.com.tw/member/serialno" className={`link2`}></Link>
                <Link to="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" className={`link3`}></Link>
                <div
                    className={`clicked`}
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>

            <img src={top2} alt="點數活動頁" className={`${down ? 'down' : 'up'}`} />
        </div>
    );
}

export default Page5;
