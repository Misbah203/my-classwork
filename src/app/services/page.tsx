"use client";
import React, { useState, useEffect } from 'react';

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-200">
        <p className="text-2xl text-pink-500 font-semibold">Loading...</p>
      </div>
    );
  }
 return (
    <div className="bg-pink-200 min-h-screen p-8" >
      <h1 className="text-3xl font-bold ">Our Services</h1>
      <ul className="mt-3 font-serif">
        <li className="py-1">Consulting Services</li>
        <li className="py-1">Research and Development</li>
        <li className="py-1">Training and Workshops</li>
        <li className="py-1">Technical Writing and Documentation</li>
        <li className="py-1">Lab Services</li>
        <li className="py-1">Tech Support and Maintenance</li>
        <li className="py-1">Case Studies and Success Stories</li>
      </ul>
 </div>
  );
}
