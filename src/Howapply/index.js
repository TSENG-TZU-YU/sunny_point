import { React, useState } from 'react';
import './_momPage2.scss';
import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/mom/0221如何成為團媽頁面-02_01.jpg';
import top2 from '../assets/mom/0221如何成為團媽頁面-02_02.jpg';

function Howapply() {
    const [down, setDown] = useState(false);

    return (
        <div className="mompage2" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/MomPlan.html">
                <Prev />
            </a>
            <div className={`momOne ${down ? '' : 'marginB'}`}>
                <img src={top1} alt="/" />
                <div
                    className="down"
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>

            <img src={top2} alt="/" className={`marageT ${ down ? 'expandDown' : 'expandUp'}`} />
        </div>
    );
}

export default Howapply;
