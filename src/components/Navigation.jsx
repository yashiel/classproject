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


import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
    const { user, signOut } = useAuth();
    const location = useLocation();

    const handleSignOut = async () => {
        await signOut();
    };

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-display">
                                ArtistAuction
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <ul className="hidden md:flex gap-10">
                            <li>
                                <Link 
                                    to="/" 
                                    className={`font-medium text-lg transition-all duration-300 relative group font-sans ${
                                        isActive("/") 
                                            ? "text-indigo-600" 
                                            : "text-gray-700 hover:text-indigo-600"
                                    }`}
                                >
                                    <span className="relative z-10">Home</span>
                                    {isActive("/") && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/artists" 
                                    className={`font-medium text-lg transition-all duration-300 relative group font-sans ${
                                        isActive("/artists") 
                                            ? "text-indigo-600" 
                                            : "text-gray-700 hover:text-indigo-600"
                                    }`}
                                >
                                    <span className="relative z-10">Artist Directory</span>
                                    {isActive("/artists") && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/events" 
                                    className={`font-medium text-lg transition-all duration-300 relative group font-sans ${
                                        isActive("/events") 
                                            ? "text-indigo-600" 
                                            : "text-gray-700 hover:text-indigo-600"
                                    }`}
                                >
                                    <span className="relative z-10">All Events</span>
                                    {isActive("/events") && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/products" 
                                    className={`font-medium text-lg transition-all duration-300 relative group font-sans ${
                                        isActive("/products") 
                                            ? "text-indigo-600" 
                                            : "text-gray-700 hover:text-indigo-600"
                                    }`}
                                >
                                    <span className="relative z-10">All Products</span>
                                    {isActive("/products") && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                        
                        {/* User Actions */}
                        <div className="flex items-center gap-4">
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700 font-sans">
                                            {user.name || user.email}
                                        </span>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl font-sans"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <Link 
                                    to="/login" 
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-sans"
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;