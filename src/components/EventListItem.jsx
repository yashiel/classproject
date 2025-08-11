/*
 * File: /Users/yashi/Desktop/classproject/src/components/EventListItem.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Friday August 8th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Monday August 11th 2025 11:18:28 pm
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import React from 'react';
import { Link } from 'react-router-dom';

function EventListItem({ item }) {
  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'TBD';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Helper function to get artists array safely
  const getArtists = () => {
    if (!item.artist) return [];
    if (Array.isArray(item.artist)) return item.artist;
    if (typeof item.artist === 'object' && !Array.isArray(item.artist)) return [item.artist];
    return [];
  };

  const artists = getArtists();

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 flex flex-col">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Event Content */}
      <div className="relative p-6 flex flex-col flex-1 min-h-0">
        {/* Event Header */}
        <div className="mb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
            {item.title || 'Untitled Event'}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
            {item.description || 'No description available'}
          </p>
        </div>

        {/* Artists Showcase - Compact Circular Layout */}
        <div className="mb-4 flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              {artists.length} Artist{artists.length !== 1 ? 's' : ''}
            </span>
          </div>

          {artists.length > 0 ? (
            <div className="relative">
              {/* Artist Images Grid - Responsive and Scalable */}
              <div className="flex flex-wrap gap-3">
                {artists.slice(0, 12).map((artist, index) => (
                  <div key={artist.$id || index} className="relative group/artist">
                    <Link 
                      to={artist.$id ? `/artists/${artist.$id}` : '#'}
                      title={artist.name || 'Unknown Artist'}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:border-indigo-300">
                        {artist.imageUrl ? (
                          <img 
                            src={artist.imageUrl} 
                            alt={artist.name}
                            className="w-full h-full object-cover group-hover/artist:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="hidden w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                    
                    {/* Artist Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover/artist:opacity-100 transition-all duration-300 pointer-events-none z-10">
                      <div className="bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700/50 whitespace-nowrap">
                        <div className="font-semibold text-white mb-2">
                          {artist.name || 'Unknown Artist'}
                        </div>
                        <div className="text-gray-300 flex items-center gap-2">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {artist.country || 'Unknown Country'}
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                ))}
                
                {/* Show more indicator for additional artists */}
                {artists.length > 12 && (
                  <div className="relative group/more">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border-2 border-white shadow-md">
                      <div className="text-center">
                        <span className="text-white text-sm font-bold">+{artists.length - 12}</span>
                      </div>
                    </div>
                    
                    {/* More Artists Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover/more:opacity-100 transition-all duration-300 pointer-events-none z-10">
                      <div className="bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700/50 whitespace-nowrap">
                        <div className="font-semibold text-white mb-2">
                          {artists.length - 12} more artist{artists.length - 12 !== 1 ? 's' : ''}
                        </div>
                        <div className="text-gray-300 text-xs">
                          Click to see all artists
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Hover Tooltip for Artist Count */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                  {artists.length} participating artist{artists.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-500 text-xs">No artists announced yet</p>
            </div>
          )}
        </div>

        {/* Bottom Section - Pushed to bottom */}
        <div className="mt-auto flex-shrink-0">
          {/* Event Details - Compact Layout */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                <p className="text-xs font-semibold text-gray-800">
                  {formatDate(item.startDate)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="relative group/location">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-xs font-semibold text-gray-800 line-clamp-1 cursor-help">
                  {item.location || 'TBD'}
                </p>
                
                {/* Location Tooltip */}
                {item.location && item.location !== 'TBD' && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover/location:opacity-100 transition-all duration-300 pointer-events-none z-10">
                    <div className="bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700/50 whitespace-nowrap">
                      <div className="font-semibold text-white mb-2 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Event Location
                      </div>
                      <div className="text-gray-300 text-xs">
                        {item.location}
                      </div>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-xl text-xs font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Details
            </button>
            {artists.length > 0 && (
              <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-4 rounded-xl text-xs font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Tickets
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;