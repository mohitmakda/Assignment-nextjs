"use client"
import React from 'react';
import Tweet from './Tweet';
import ExamplePage from './ExamplePage'; 
import Sidebar from './Sidebar';

const DiscussionForum = () => {

  return (
    <div>
      <div className=' md:container mx-auto px-4 py-8 max-h-screen'> 
        <h1 className='hidden md:block text-red-500 bg-gray-200 p-4 w-64 font-bold '>Discussion Forum</h1>
        <div className=""> 
          <Tweet {...ExamplePage}/> 
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
