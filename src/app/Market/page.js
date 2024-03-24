import React from 'react'
import MarketData from '../../components/MarketData';
import MarketStoryData from '../../components/MarketStory';
import Sidebar from '@/components/Sidebar';
  
const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Sidebar/>
      
      <h1 className='hidden md:text-red-500 bg-gray-200 p-4 w-64 '>Market Stories</h1>
    
      <div className="">
        {MarketStoryData.map((feature, index) => (
          <div key={index} className="flex flex-col mt-4">
            <MarketData {...feature} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Page
