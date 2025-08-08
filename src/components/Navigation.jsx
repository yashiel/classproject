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

const Navigation = () => {
    return (
        <>
            <nav className="flex gap-4 p-4">
                <ul className="flex gap-4">
                    <li><Link to="/" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Home</Link></li>
                    <li><Link to="/artists" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Artist</Link></li>
                    <li><Link to="/events" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Events</Link></li>
                    <li><Link to="/products" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Products</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;