import { React, useState } from 'react';
import './_momPage2.scss';

import top1 from '../assets/mom/如何成為團媽頁面-02_01.jpg';
import top2 from '../assets/mom/如何成為團媽頁面-02_02.jpg';

function MomPage2() {
    const [down, setDown] = useState(false);

    return (
        <div className="mompage2">
            <div className="momOne">
                <img src={top1} alt="/" />
                <div
                    className="down"
                    onClick={() => {
                        setDown(true);
                    }}
                ></div>
            </div>

            <img src={top2} alt="/" className={`${down ? 'expandDown' : 'expandUp'}`} />
        </div>
    );
}

export default MomPage2;
