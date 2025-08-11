/*
 * File: /Users/yashi/Desktop/classproject/src/pages/AddArtist.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Monday August 11th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Monday August 11th 2025 10:37:23 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../data/database';

function AddArtist() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    genre: '',
    country: '',
    websiteUrl: '',
    imageUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      await db.artists.create(formData);
      navigate('/artists');
    } catch (error) {
      console.error('Error creating artist:', error);
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate('/artists');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Add New Artist
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Introduce a new artist to our community and share their unique story
            </p>
          </div>

          {/* Main Form Container */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">New Artist Profile</h2>
                  <p className="text-gray-600">Create artist information</p>
                </div>
              </div>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Go Back
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Two Column Layout for Basic Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Artist Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300"
                        placeholder="Enter artist name"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="genre" className="block text-sm font-semibold text-gray-700 mb-3">
                      Genre
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300"
                        placeholder="e.g., Pop, Rock, Jazz"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-3">
                      Country
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300"
                        placeholder="e.g., United States"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-semibold text-gray-700 mb-3">
                      Website URL
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300"
                        placeholder="https://artist-website.com"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-700 mb-3">
                      Image URL
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300"
                        placeholder="https://example.com/image.jpg"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Image Preview */}
                  {formData.imageUrl && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Image Preview
                      </label>
                      <div className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-gray-200">
                        <img 
                          src={formData.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-500">Invalid image URL</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bio Section */}
              <div>
                <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-3">
                  Biography
                </label>
                <div className="relative">
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/60 backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Tell the story of this amazing artist..."
                    required
                  />
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200/50">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  {saving ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Artist...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Create Artist
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-white/60 backdrop-blur-sm text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-white/80 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancel
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArtist;
