/*
 * File: /Users/yashi/Desktop/classproject/src/components/ListItem.jsx
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


import React from 'react';
import { Link } from 'react-router-dom';
import db from '../data/database';
import { useAuth } from '../context/AuthContext';

function ListItem({ item }) {
  const { user } = useAuth();

  const handleDelete = async () => {
    if (!user) {
      alert('You must be logged in to delete artists');
      return;
    }
    
    try {
      await db.artists.delete(item.$id);
      // Optionally refresh the page or update the list
      window.location.reload();
    } catch (error) {
      console.error('Error deleting artist:', error);
    }
  };







  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 h-[600px] flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Artist Image */}
      <Link to={`/artists/${item.$id}`} className="block">
        <div className="relative h-72 overflow-hidden cursor-pointer">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Genre Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
              {item.genre}
            </span>
          </div>
          
          {/* Country Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              {item.country}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Delete Button (Admin Only) - Positioned between image and content */}
      {user && (
        <div className="relative">
          <button 
            className="absolute -top-5 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:scale-110 z-10" 
            onClick={handleDelete}
            title="Delete Artist"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      )}
      
              {/* Content */}
        <div className="relative px-8 pt-8 pb-4 flex flex-col flex-1 min-h-0">
          {/* Top Content */}
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
              {item.name}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
              {item.bio}
            </p>
          </div>
          
                    {/* Bottom Content - Pushed to bottom */}
          <div className="mt-auto flex-shrink-0">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
            {user && (
              <Link 
                to={`/artists/${item.$id}/edit`} 
                className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex-1 text-center transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Edit
              </Link>
            )}
            <Link 
              to={`/artists/${item.$id}`} 
              className='bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex-1 text-center transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              View Profile
            </Link>
          </div>
          
          {/* Website Link */}
          {item.websiteUrl && (
            <div className="border-t border-gray-100/50">
              <a 
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='text-indigo-600 hover:text-indigo-800 text-sm font-semibold hover:underline transition-colors duration-300 flex items-center justify-center gap-2 bg-indigo-50/50 hover:bg-indigo-50/80 py-2 px-4 rounded-lg backdrop-blur-sm'
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListItem;