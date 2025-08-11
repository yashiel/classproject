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
import { Link } from 'react-router-dom'

function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <>
      <footer className={`fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-indigo-800 dark:border-b-indigo-6000 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
          <span className="text-sm text-gray-500 sm:text-center dark:text-white">© 2025 <a href="https://artistauction.appwrite.network/" className="hover:underline">Artist Auction</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0">
              <li>
                  <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
              </li>
              <li>
                  <Link to="/artists" className="hover:underline me-4 md:me-6">Artist Directory</Link>
              </li>
              <li>
                  <Link to="/events" className="hover:underline me-4 md:me-6">All Events</Link>
              </li>
              <li>
                  <Link to="/products" className="hover:underline">All Products</Link>
              </li>
          </ul>
      </footer>
    </>
  )
}

export default Footer   