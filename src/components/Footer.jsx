/*
 * File: /Users/yashi/Desktop/classproject/src/components/Footer.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Saturday August 9th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Saturday August 9th 2025 11:12:18 pm
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <footer className={`fixed bottom-0 left-0 z-20 w-full backdrop-blur-md bg-white/70 border-t border-white/30 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Brand and Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ArtistAuction
              </Link>
              <span className="text-sm text-gray-600 text-center md:text-left">
                © 2025 All Rights Reserved. Connecting artists with art lovers worldwide.
              </span>
            </div>
            
            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center gap-6 text-sm">
              <li>
                <Link 
                  to="/" 
                  className={`font-medium transition-all duration-300 hover:text-indigo-600 ${
                    isActive("/") ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/artists" 
                  className={`font-medium transition-all duration-300 hover:text-indigo-600 ${
                    isActive("/artists") ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className={`font-medium transition-all duration-300 hover:text-indigo-600 ${
                    isActive("/events") ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={`font-medium transition-all duration-300 hover:text-indigo-600 ${
                    isActive("/products") ? "text-indigo-600" : "text-gray-600"
                  }`}
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer   