/*
 * File: /Users/yashi/Desktop/classproject/src/pages/Artist.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Monday August 11th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Monday August 11th 2025 4:15:22 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import db from '../data/database';
import { useAuth } from '../context/AuthContext';

function Artist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await db.artists.get(id);
        setArtist(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artist:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchArtist();
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${artist.name}? This action cannot be undone.`)) {
      setDeleting(true);
      try {
        await db.artists.delete(id);
        navigate('/artists');
      } catch (error) {
        console.error('Error deleting artist:', error);
        setDeleting(false);
      }
    }
  };

  if (!artist) {
    return <div className="flex justify-center items-center h-screen">Artist not found</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Hero Section with Full-Screen Image */}
        <div className="relative h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={artist.imageUrl} 
              alt={artist.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-6 pb-20">
              <div className="max-w-4xl">
                {/* Genre Badge */}
                <div className="mb-6">
                  <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {artist.genre}
                  </span>
                </div>
                
                {/* Artist Name */}
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">
                  {artist.name}
                </h1>
                
                {/* Country */}
                <p className="text-2xl text-gray-300 mb-8">
                  {artist.country}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {user && (
                    <>
                      <button
                        onClick={() => navigate(`/artists/${id}/edit`)}
                        className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit Profile
                      </button>
                      <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                      >
                        {deleting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Deleting...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete Artist
                          </>
                        )}
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => navigate('/artists')}
                    className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Back to Artists
                  </button>
                  {artist.websiteUrl && (
                    <a
                      href={artist.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="bg-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Bio Section */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">About {artist.name}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {artist.bio}
                  </p>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">Genre</div>
                  <div className="text-xl text-gray-700">{artist.genre}</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">Location</div>
                  <div className="text-xl text-gray-700">{artist.country}</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
                  <div className="text-4xl font-bold text-pink-600 mb-2">Status</div>
                  <div className="text-xl text-gray-700">Active</div>
                </div>
              </div>
              
              {/* Gallery Section (Placeholder) */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Artwork {item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-xl mb-8 opacity-90">
                  Interested in collaborating or learning more about {artist.name}?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {artist.websiteUrl && (
                    <a
                      href={artist.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      Visit Website
                    </a>
                  )}
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artist