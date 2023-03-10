import { React, useState } from 'react';
import './_momPage4.scss';
import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/mom/0221如何成為團媽頁面-04_01.jpg';
import top2 from '../assets/mom/0221如何成為團媽頁面-04_02.jpg';

function Howopen() {
    const [down, setDown] = useState(false);

    return (
        <div className="mompage4" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/MomPlan.html">
                <Prev />
            </a>
            <div className={`momFour ${down ? '' : 'marginB'}`}>
                <img src={top1} alt="/" />
                <div
                    className="down"
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
                <a href="https://www.sunnygo.com.tw/web-front/ReturnRefundPage/OpenGroupCommodity" className="toOpen">
                    {''}
                </a>
            </div>
            <div className="toOpen2">
                <img src={top2} alt="/" className={` ${down ? 'expandDown' : 'expandUp'}`} />
                {down ? (
                    <a href="https://www.sunnygo.com.tw/web-front/ReturnRefundPage/OpenGroupCommodity" alt="/">
                        {''}
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default Howopen;
