/*
 * File: /Users/yashi/Desktop/classproject/src/main.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Friday August 8th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Friday August 8th 2025 4:50:35 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */



import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import App from './App.jsx'
import Artists from './pages/Artists'
import Events from './pages/Events'
import Products from './pages/Products'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)