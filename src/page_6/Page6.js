import React from 'react';
import './_page6.scss';

import Top from '../top/Top';
import top1 from '../assets/six/點數活動頁5-24.png';
import top2 from '../assets/six/點數活動頁5-25.png';
import top3 from '../assets/six/點數活動頁5-28.png';
import top4 from '../assets/six/點數活動頁5-29.png';
import top5 from '../assets/six/點數活動頁5-30.png';

function Page6() {
    return (
        <div className="page6" id="top">
            <Top />
            <div className="onePage">
                <div>回上一頁</div>
                {/* <div className="title">點數序號兌換方式</div> */}
                <div className="click">
                    <a href="#one">
                        <img src={top3} alt="點數活動頁" className="clickBtn" />
                    </a>
                    <a href="#two">
                        <img src={top4} alt="點數活動頁" className="clickBtn" />
                    </a>
                    <a href="#three">
                        <img src={top5} alt="點數活動頁" className="clickBtn" />
                    </a>
                </div>
            </div>
            <img src={top1} alt="點數活動頁" id="one" />
            <img src={top2} alt="點數活動頁" id="two" />
            <div id="three" className="three"></div>
        </div>
    );
}

export default Page6;
