import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Top from '../component/top/Top';
import top1 from '../assets/three/點數活動頁5-14.png';
import top2 from '../assets/three/點數活動頁5-15.png';

import './_page3.scss';

function Page3() {
    const [down, setDown] = useState(false);

    return (
        <div className="page3" id="#top">
            <Top />
            <Link
                to="https://www.sunnygo.com.tw/web-front/pointExchange"
                className={`link01 ${down ? 'link01Down' : ''}`}
            ></Link>
            <Link
                to="https://hamipoint.cht.com.tw/member/serialno"
                className={`link02 ${down ? 'link02Down' : ''}`}
            ></Link>
            <Link
                to="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange"
                className={`link03 ${down ? 'link03Down' : ''}`}
            ></Link>
            <img src={top1} alt="點數活動頁" />
            <div
                className={`click ${down ? '' : 'top'}`}
                onClick={() => {
                    setDown(true);
                }}
            ></div>
            {/* <div className={`cc ${down ? 'expandDown' : 'expandUp'}`}> */}
            <img src={top2} alt="點數活動頁" className={`${down ? 'expandDown' : 'expandUp'}`} />
            {/* </div> */}
        </div>
    );
}

export default Page3;
