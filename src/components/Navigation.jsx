/*
 * File: /Users/yashi/Desktop/classproject/src/components/Navigation.jsx
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


import { Link } from "react-router";

export const Navigation = () => {
    return (
        <>
            <nav className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/artists">Artist</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
        </>
    )
}