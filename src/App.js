import './app.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//子頁面
import Header from './Header';
import Exchang from './Exchang';
import Search from './Search';
import Page3 from './page_3/Page3';
import Page4 from './page_4/Page4';
import Page5 from './page_5/Page5';
import Page6 from './page_6/Page6';

function App() {
    return <Page5 />;
}

export default App;
