import './app.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//sunny point
import Header from './Header';
import Exchang from './Exchang';
import Page3 from './page_3/Page3';
import Page4 from './page_4/Page4';
import Page5 from './page_5/Page5';
import Page6 from './page_6/Page6';
import Search from './Search';

// mom
import Mom_page3 from './Mom_page3';

function App() {
    return <Mom_page3 />;
}

export default App;
