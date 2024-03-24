"use clienty"
import React, { useState, useEffect } from 'react';
import MarketData from './MarketData';
import MarketStoryData from './MarketStory';

const MarketStories = () => {
 
  return (
    <div className="hidden md:block container mx-auto px-4 py-8 max-h-screen">

    <h1 className='hidden md:block text-red-500 bg-gray-200 p-4 w-64 font-bold '>Market Stories</h1>
      
      <div className="">
        {MarketStoryData.map((feature, index) => (
          <div key={index} className="flex flex-col mt-4">
            <MarketData {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
