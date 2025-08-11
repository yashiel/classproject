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
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Artist Image */}
      <Link to={`/artists/${item.$id}`} className="block">
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Genre Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {item.genre}
            </span>
          </div>
          
          {/* Country Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
              {item.country}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Content */}
      <div className="relative p-6 flex flex-col flex-1">
        {/* Top Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
            {item.name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {item.bio}
          </p>
        </div>
        
        {/* Bottom Content - Pushed to bottom */}
        <div className="mt-auto">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {user && (
              <Link 
                to={`/artists/${item.$id}/edit`} 
                className='bg-indigo-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-all duration-200 flex-1 text-center transform hover:scale-105 shadow-md'
              >
                Edit
              </Link>
            )}
            <Link 
              to={`/artists/${item.$id}`} 
              className='bg-amber-500 text-black px-3 py-2 rounded-lg text-sm font-medium hover:bg-amber-400 transition-all duration-200 flex-1 text-center transform hover:scale-105 shadow-md font-semibold'
            >
              View Profile
            </Link>
          </div>
          
          {/* Website Link */}
          {item.websiteUrl && (
            <div className="border-t border-gray-100 pt-4">
              <Link 
                to={item.websiteUrl} 
                className='text-indigo-600 hover:text-indigo-800 text-sm font-medium hover:underline transition-colors duration-200 flex items-center justify-center gap-2'
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </Link>
            </div>
          )}
        </div>
        
        {/* Delete Button (Admin Only) */}
        {user && (
          <button 
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600" 
            onClick={handleDelete}
            title="Delete Artist"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default ListItem;