import { React, useRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoIosArrowForward } from 'react-icons/io';

import './_page6.scss';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/six/點數活動頁5-11-24.jpg';
import top2 from '../assets/six/點數活動頁5-11-25.jpg';

function Sunnylifepoint() {
    const [scrollDown, setScrollDown] = useState(false);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef();
    let scrollHeight = '';
    useEffect(() => {
        scrollHeight = scrollRef.current.offsetHeight;
        // console.log(scrollHeight);
    }, [loading]);

    window.addEventListener('scroll', () => {
        let scrollNow = window.scrollY;
        // console.log('object', scrollNow + 5);
        scrollNow + 5 >= scrollHeight ? setScrollDown(true) : setScrollDown(false);
        setLoading(!loading);
    });
    return (
        <div className="page6" id="top">
            <Top />
            <div className="none">
                <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html">
                    <Prev />
                </a>
            </div>

            <div className="onePage">
                <div className="click">
                    <Link href="#one" to="one" spy={true} activeClass="isClick" className="cl1">
                        <div className="clickBtn">特約店家消費折抵</div>
                    </Link>
                    <Link href="#two" to="two" spy={true} activeClass="isClick" className="cl1">
                        <div className="clickBtn">賞利點綁定嘟嘟房停車</div>
                    </Link>
                    {scrollDown ? (
                        ''
                    ) : (
                        <div className="pre">
                            上一頁
                            <IoIosArrowForward />
                        </div>
                    )}

                    {/* <a href="#three">
                        <img src={top5} alt="點數活動頁" className="clickB" />
                    </a> */}
                </div>
            </div>
            <div className="twoTo"  ref={scrollRef}>
                <img src={top1} alt="點數活動頁" id="one" className="toOne" />
                <a href="https://www.sunnygo.com.tw/static_custom/11m_active/cooperative.html" alt="/" className="to">
                    {''}
                </a>
            </div>
            <img src={top2} alt="點數活動頁" id="two" />
            {/* <div id="three" className="three"></div> */}
        </div>
    );
}

export default Sunnylifepoint;
