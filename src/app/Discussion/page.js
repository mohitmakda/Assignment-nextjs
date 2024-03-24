import React from 'react';
import Sidebar from '../../components/Sidebar'; // Specify the correct relative path
import DiscussionForum from '../../components/DiscussionForum'; // Specify the correct relative path

const Page = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className=''>
        <DiscussionForum/>
      </div>
    </div> 
  );
};

export default Page;
