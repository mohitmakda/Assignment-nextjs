import React from 'react';

const Tweet = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="flex items-start p-4 border border-gray-300 rounded-lg shadow-md mt-5">
          <img src={user.dp} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-bold">{user.name}</h3>
            <p className="mb-2">{user.tweet}</p>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <img src="/assets/heart.png" className="cursor-pointer duration-500 w-4" />
                <span>{user.likes}</span>
              </div>
              <div className="flex items-center mr-4">
                <img src="/assets/eye.png" className="cursor-pointer duration-500 w-5" />
                <span>{user.views}</span>
              </div>
              <div className="flex items-center">
                <img src="/assets/comment.png" className="cursor-pointer duration-500 w-6" />
                <span>{user.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweet;
