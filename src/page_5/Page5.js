import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Top from '../component/top/Top';
import top1 from '../assets/five/點數活動頁5-22.png';
import top2 from '../assets/five/點數活動頁5-23.png';

import './_page5.scss';

function Page5() {
    const [down, setDown] = useState(false);

    return (
        <div className="page5" id="#top">
            <Top />
            <Link
                to="https://www.sunnygo.com.tw/web-front/pointExchange"
                className={`link1 ${down ? 'link1Down' : ''}`}
            ></Link>
            <Link
                to="https://hamipoint.cht.com.tw/member/serialno"
                className={`link2 ${down ? 'link2Down' : ''}`}
            ></Link>
            <Link
                to="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange"
                className={`link3 ${down ? 'link3Down' : ''}`}
            ></Link>
            <img src={top1} alt="點數活動頁" />
            <div
                className={`clicked ${down ? '' : 'topTo'}`}
                onClick={() => {
                    setDown(true);
                }}
            ></div>
            <img src={top2} alt="點數活動頁" className={`${down ? 'down' : 'up'}`} />
        </div>
    );
}

export default Page5;
