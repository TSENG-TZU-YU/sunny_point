import './App.scss';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//子頁面
import Header from './Header';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Header" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
