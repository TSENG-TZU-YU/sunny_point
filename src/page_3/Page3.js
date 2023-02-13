import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Top from '../top/Top';
import top1 from '../assets/three/點數活動頁5-14.png';
import top2 from '../assets/three/點數活動頁5-15.png';

import './_page3.scss';

function Page3() {
    const [down, setDown] = useState(false);

    return (
        <div className="page3" id="#top">
            <Top />
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
