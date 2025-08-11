/*
 * File: /Users/yashi/Desktop/classproject/src/pages/Events.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Wednesday August 6th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Monday August 11th 2025 11:17:19 pm
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */

import db from '../data/database';
import { useState, useEffect } from 'react';
import { Query } from 'appwrite'; 
import EventListItem from '../components/EventListItem';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const listEvents = async () => {
    try {
      const response = await db.events.list([Query.orderAsc('title')]);
      setEvents(response.documents);
      setLoading(false);
      return response;
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
      setEvents([]);
    }
  };

  useEffect(() => {
    listEvents();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex justify-center items-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading events...</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-24">
        <div className="container mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">All Events</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exciting art events, exhibitions, and live performances from talented artists around the world.
            </p>
          </div>
          
          {/* Events Grid */}
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventListItem key={event.$id} item={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Events Found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                There are currently no events scheduled. Check back soon for exciting new events and exhibitions!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Events;