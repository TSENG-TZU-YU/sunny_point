import React, { useState } from 'react';
import './app.scss';
import top from '../assets/one/點數活動頁5-01.png';
import topStar from '../assets/one/點數活動頁5-27.png';
// import top2 from './assets/top2.jpg';
import one from '../assets/one/點數活動頁5-31.png';
import one_app from '../assets/one/點數活動頁5-03.png';
import one_circle1 from '../assets/one/點數活動頁5-34.png';
import one_circle2 from '../assets/one/點數活動頁5-33.png';
import one_circle3 from '../assets/one/點數活動頁5-32.png';
// import pop from '../assets/one/點數活動頁5-04.png';
import two from '../assets/one/點數活動頁5-05.png';
import three from '../assets/one/點數活動頁5-06.png';
import four from '../assets/one/點數活動頁5-07.png';
import five from '../assets/one/SunnyPoint大進擊-32_04.png';
import five1 from '../assets/one/SunnyPoint大進擊2-31.png';
// import five2 from './assets/five2.jpg';
// import five3 from './assets/five3.jpg';
// import fixLogo from './assets/fixLogo.png';
import { Link, animateScroll } from 'react-scroll';
import { AiOutlineLeft } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IoIosArrowDown } from 'react-icons/io';

import PrevPage from '../component/Prev_page';

function Header() {
    var scroll = animateScroll;
    const [show, setShow] = useState(true);
    const handleShow = (type) => () => setShow(type === 'show');

    return (
        <div id="container" className="container">
            <a href="https://www.sunnygo.com.tw/web-front/#/activePanel?id=7">
                <PrevPage />
            </a>

            <div className={show ? 'fixed' : 'fixed fixedActive'}>
                {/* <div onClick={handleShow('hide')} className="top"></div> */}

                <div onClick={handleShow('hide')} className="fixedItem">
                    <LazyLoadImage className="top" src={topStar} alt="" />
                    Sunny
                    <br />
                    Point
                </div>
                <Link
                    href="#one"
                    to="one"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    賞利點介紹
                </Link>
                <Link
                    href="#two"
                    to="two"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    賞利點集點
                </Link>
                <Link
                    href="#three"
                    to="three"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    賞利點兌換
                </Link>
                <Link
                    href="#four"
                    to="four"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    下載APP
                </Link>
                <Link
                    href="#five"
                    to="five"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    點數規則
                </Link>
                <div
                    onClick={() => {
                        scroll.scrollToTop();
                    }}
                    className="fixedItem"
                >
                    ▲TOP
                </div>
            </div>

            <div className="imageContainer">
                <img src={top} alt="" />
            </div>

            <div className="imageContainer">
                {/* <a className="top2href1" href="https://www.sunnygo.com.tw/web-front/#/activePanel?id=12"></a> */}
                {/* <Link className="top2href2" href="#one" to="one" spy={true} smooth={true}></Link>
                <Link className="top2href3" href="#two" to="two" spy={true} smooth={true}></Link>
                <Link className="top2href4" href="#three" to="three" spy={true} smooth={true}></Link>
                <Link className="top2href5" href="#four" to="four" spy={true} smooth={true}></Link>
                <Link className="top2href6" href="#five" to="five" spy={true} smooth={true}></Link>
                <Link className="top2href7" href="#five2" to="five2" spy={true} smooth={true}></Link>
                <Link className="top2href8" href="#five3" to="five3" spy={true} smooth={true}></Link>
                <Link className="top2href9" href="#five3" to="five3" spy={true} smooth={true}></Link> */}

                {/* <img src={top2} alt="" /> */}
            </div>

            <div id="one" name="one" className="imageContainer">
                <LazyLoadImage src={one} alt="" />
                <nav>
                    <LazyLoadImage src={one_app} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle1} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle2} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle3} alt="" />
                </nav>
            </div>
            <div id="two" name="two" className="imageContainer ">
                <LazyLoadImage src={two} alt="" />

                <a href="https://www.sunnygo.com.tw/web-front/#/store/sunnyfan" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/web-front/home" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/web-front/BankdividendHomepage/bankdivHome" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnybank.com.tw/activityevent/112-01_SunnyLifePoints/web.html" alt="/">
                    {' '}
                </a>
                <a
                    href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134"
                    alt="/"
                >
                    {' '}
                </a>
                {/* <a href="" alt="/">
                    {' '}
                </a> */}
            </div>

            <div id="three" name="three" className="imageContainer mt">
                <LazyLoadImage src={three} alt="" />
            </div>
            <div id="four" name="four" className="imageContainer">
                <LazyLoadImage src={four} alt="" />
            </div>
            <div id="five" name="five" className="imageContainer ">
                <LazyLoadImage className="five" id="five1" src={five} alt="" />
                <div className="fiveCon">
                    <div className="title">
                        <h2>Sunny Life 點數規則及說明</h2>
                        <div className="cow">
                            <LazyLoadImage src={five1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="position">
                    <div className="left">
                        <div className="pointBox">
                            <h4 className="text">Q1:賞力點</h4>
                            <div className="containBox">
                                <IoIosArrowDown className="icon" size={30} />
                                <p>aaa</p>
                            </div>
                        </div>

                        <div className="pointBox">
                            <h4 className="text">Q1:賞力點</h4>
                            <div className="containBox">
                                <IoIosArrowDown className="icon" size={30} />
                                <p>aaa</p>
                            </div>
                        </div>
                        <div className="pointBox">
                            <h4 className="text">Q1:賞力點</h4>
                            <div className="containBox">
                                <IoIosArrowDown className="icon" size={30} />
                                <p>aaa</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="pointBox">
                            <h4 className="text">Q1:賞力點</h4>
                            <div className="containBox">
                                <IoIosArrowDown className="icon" size={30} />
                                <p>aaa</p>
                            </div>
                        </div>
                        <div className="pointBox">
                            <h4 className="text">Q1:賞力點</h4>
                            <div className="containBox">
                                <IoIosArrowDown className="icon" size={30} />
                                <p>aaa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleShow('show')} className={show ? 'fixed2 fixedActive ' : 'fixed2 '}>
                <AiOutlineLeft /> 快速導覽
            </div>
        </div>
    );
}

export default Header;
