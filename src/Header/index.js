import React, { useState } from 'react';
import './app.scss';
// import top1 from './assets/top1.jpg';
// import top2 from './assets/top2.jpg';
// import one from './assets/one.jpg';
// import two from './assets/two.jpg';
// import three from './assets/three.jpg';
// import four from './assets/four.jpg';
// import five1 from './assets/five1.jpg';
// import five2 from './assets/five2.jpg';
// import five3 from './assets/five3.jpg';
// import fixLogo from './assets/fixLogo.png';
import { Link, animateScroll } from 'react-scroll';
import { AiOutlineLeft } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function Header() {
    var scroll = animateScroll;
    const [show, setShow] = useState(true);
    const handleShow = (type) => () => setShow(type === 'show');

    return (
        <div id="container" className="container">
            <a href="https://www.sunnygo.com.tw/web-front/#/activePanel?id=7" className="prev">
                回上一頁
                <IoIosArrowForward />
            </a>

            <div className={show ? 'fixed' : 'fixed fixedActive'}>
                {/* <div onClick={handleShow('hide')} className="top"></div> */}
                <div onClick={handleShow('hide')} className="fixedItem">
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
                    滿額送
                </Link>
                <Link
                    href="#two"
                    to="two"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    滿額折
                </Link>
                <Link
                    href="#three"
                    to="three"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    滿額抽
                </Link>
                <Link
                    href="#four"
                    to="four"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    買就送
                </Link>
                <Link
                    href="#five"
                    to="five"
                    spy={true}
                    smooth={true}
                    className="fixedItem"
                    activeClass="fixedItem active"
                >
                    加碼送
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
            <div onClick={handleShow('show')} className={show ? 'fixed2 fixedActive ' : 'fixed2 '}>
                <AiOutlineLeft /> 快速導覽
            </div>

            <div className="pointBox">
                <div className="text">Q1:賞力點</div>
                <div className="containBox">
                    <IoIosArrowDown size={30} />
                </div>
            </div>

            {/* <div className="imageContainer">
                <img src={top1} alt="" />
            </div> */}
            {/* <div className="imageContainer">
                <a className="top2href1" href="https://www.sunnygo.com.tw/web-front/#/activePanel?id=12"></a>
                <Link className="top2href2" href="#one" to="one" spy={true} smooth={true}></Link>
                <Link className="top2href3" href="#two" to="two" spy={true} smooth={true}></Link>
                <Link className="top2href4" href="#three" to="three" spy={true} smooth={true}></Link>
                <Link className="top2href5" href="#four" to="four" spy={true} smooth={true}></Link>
                <Link className="top2href6" href="#five" to="five" spy={true} smooth={true}></Link>
                <Link className="top2href7" href="#five2" to="five2" spy={true} smooth={true}></Link>
                <Link className="top2href8" href="#five3" to="five3" spy={true} smooth={true}></Link>
                <Link className="top2href9" href="#five3" to="five3" spy={true} smooth={true}></Link>

                <img src={top2} alt="" />
            </div> */}

            {/* <div id="one" name="one" className="imageContainer">
                <LazyLoadImage src={one} alt="" />
                <a className="href1" href="https://lihi2.cc/8G8SG">
                    {' '}
                </a>
            </div>
            <div id="two" name="two" className="imageContainer">
                <LazyLoadImage src={two} alt="" />
            </div>
            <div id="three" name="three" className="imageContainer">
                <LazyLoadImage src={three} alt="" />
            </div>
            <div id="four" name="four" className="imageContainer">
                <LazyLoadImage src={four} alt="" />
                <a className="href2" href="https://www.sunnygo.com.tw/web-front/#/productDetails?id=232632" alt="">
                    {' '}
                </a>
            </div>
            <div id="five" name="five" className="imageContainer">
                <LazyLoadImage id="five1" src={five1} alt="" />
                <LazyLoadImage id="five2" src={five2} alt="" />
                <LazyLoadImage id="five3" src={five3} alt="" />
                <a className="href3" href="https://www.sunnygo.com.tw/web-front/#/store/sunnyfan" alt="/">
                    {' '}
                </a>
                <a className="href4" href="https://www.sunnygo.com.tw/web-front/#/registerPage/fillPhone" alt="/">
                    {' '}
                </a>
                <a className="href5" href="https://www.sunnygo.com.tw/web-front/#/appDownLoad" alt="/">
                    {' '}
                </a>
                <a
                    className="href6"
                    href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134"
                    alt="/"
                >
                    {' '}
                </a>
                <a
                    className="href7"
                    href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134"
                    alt="/"
                >
                    {' '}
                </a>
            </div> */}
        </div>
    );
}

export default Header;
