import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

import './_page4.scss';

import Top from '../component/top/Top';
import Prev from '../component/Prev_page/index';
import top1 from '../assets/four/點數活動頁5-16.png';
import top2 from '../assets/four/點數活動頁5-17.png';
import top3 from '../assets/four/點數活動頁5-18.png';
import top4 from '../assets/four/點數活動頁4-1-09.png';
import top5 from '../assets/four/點數活動頁5-20.png';
import top6 from '../assets/four/點數活動頁5-21.png';
import top7 from '../assets/four/點數活動頁4-10-10.png';

function Exchangemethod() {
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
        <div className="page4" id="#top">
            <Top />
            <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Exchang.html">
                <Prev />
            </a>

            <div className={`onePage`} ref={scrollRef}>
                <img src={top7} alt="點數活動頁" className="click" />
                <Link href="#one" to="one" spy={true} className="clickBtn-1">
                    {''}
                </Link>
                <Link href="#two" to="two" spy={true} className="clickBtn-2">
                    {''}
                </Link>
                <Link href="#three" to="three" spy={true} className="clickBtn-3">
                    {''}
                </Link>
            </div>
            {scrollDown ? (
                <div className="scrollBar">
                    <div className="scroll">
                        <Link href="#one" to="one" spy={true} activeClass="onClick" className="nowClick">
                            <img src={top1} alt="點數活動頁" className={`scroll-1`} />
                        </Link>
                        <Link href="#two" to="two" spy={true} activeClass="onClick" className="nowClick">
                            <img src={top2} alt="點數活動頁" className={`scroll-2`} />
                        </Link>
                        <Link href="#three" to="three" spy={true} activeClass="onClick" className="nowClick">
                            <img src={top3} alt="點數活動頁" className={`scroll-3`} />
                        </Link>
                    </div>
                </div>
            ) : (
                ''
            )}

            <div className="one1">
                <img src={top4} alt="點數活動頁" className="one" id="one" />
                <a href="https://www.sunnygo.com.tw/web-front/pointExchange" alt="/" className="link-1">
                    {''}
                </a>
            </div>
            <div className="one2">
                <img src={top5} alt="點數活動頁" className="two" id="two" />
                <a href="https://hamipoint.cht.com.tw/member/serialno" alt="/" className="link-2">
                    {''}
                </a>
            </div>
            <div className="one3">
                <img src={top6} alt="點數活動頁" className="three" id="three" />
                <a href="https://www.superpoint.com.tw/login?redirectUrl=%2Fweb%2Fexchange" alt="/" className="link-3">
                    {''}
                </a>
            </div>
        </div>
    );
}

export default Exchangemethod;
