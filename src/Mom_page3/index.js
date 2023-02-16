import React, { useState } from 'react';
import './app.scss';
import { TiArrowSortedDown } from 'react-icons/ti';

import one from '../assets/mom/團爸團媽養成計劃-01_01.jpg';
import two from '../assets/mom/團爸團媽養成計劃-01_02.jpg';
import qa1 from '../assets/one/SunnyPoint大進擊-32_04.png';
import qa2 from '../assets/one/SunnyPoint大進擊2-31.png';

import { Link, animateScroll } from 'react-scroll';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Search() {
    return (
        <div className="qaContainer">
            <div className="qaContain">
                <div className="imageContainerQa ">
                    <LazyLoadImage src={one} alt="" />
                </div>
                <div className="imageContainerQa ">
                    <LazyLoadImage src={two} alt="" />
                </div>
                <div id="five" name="five" className="imageContainerQa ">
                    <LazyLoadImage className="five" id="five1" src={qa1} alt="" />
                    <div className="fiveCon">
                        <div className="title">
                            <h2>團媽 Q & A</h2>
                            <div className="cow">
                                <LazyLoadImage src={qa2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="position">
                        <div className="left">
                            <div className="pointBox">
                                <h4 className="text">Q1.哪些人可以購買團購商品？</h4>
                                <div className="containBox">
                                    <TiArrowSortedDown className="icon" size={30} />
                                    <p>
                                        團媽可將商品連結發給所有人，但會員推薦人須為團媽代碼才能購買
                                        若對方非自己所推薦的會員時，只能看商品，無法下單
                                    </p>
                                    <p> *若有推薦碼欲更改之情形，請聯繫商店街</p>
                                </div>
                            </div>

                            <div className="pointBox">
                                <h4 className="text">Q3.團購商品可否取消?</h4>
                                <div className="containBox box3">
                                    <TiArrowSortedDown className="icon" size={30} />
                                    <p>消費者收到商品後7日內，詳細請參照開團商品廠商退貨規則</p>
                                    <p>
                                        2.點數等同現金，每1點等同新台幣1元，會員可使用點數兌換陽信商店街商品或是於結帳時選擇全額或部份折抵消費。
                                    </p>
                                    <p>
                                        *經退貨商品 該商品無回饋金 例如：成團10件後7日內有團員退貨2件，實際回饋金8件。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="pointBox">
                                <h4 className="text">Q2.團購數量不夠成團怎麼辦？</h4>
                                <div className="containBox">
                                    <TiArrowSortedDown className="icon" size={30} />
                                    {/* <h3 className="icon"  size={30}>▼</h3> */}
                                    <p>
                                        需成團才算正式團購成功。
                                        例如：A商品為10件成團，若結團日時只有9件，則本團將全部取消訂單
                                    </p>
                                </div>
                            </div>
                            <div className="pointBox">
                                <h4 className="text">Q4.回饋金額達多少可以請款？</h4>
                                <div className="containBox">
                                    <TiArrowSortedDown className="icon" size={30} />
                                    <p>回饋金需500元以上可請款，可隨時請款，需等7-14工作天入帳</p>\
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
