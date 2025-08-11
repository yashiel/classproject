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


import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <>
            <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow-sm">
                <ul className="flex gap-4">
                    <li><Link to="/" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Home</Link></li>
                    <li><Link to="/artists" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">Artist Directory</Link></li>
                    <li><Link to="/events" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">All Events</Link></li>
                    <li><Link to="/products" className="text-black font-bold text-2xl hover:text-gray-500 transition-colors duration-300 hover:underline hover:underline-offset-4">All Products</Link></li>
                </ul>
                
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">Welcome, {user.name || user.email}</span>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link 
                            to="/login" 
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-600 transition-colors"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navigation;