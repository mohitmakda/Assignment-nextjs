"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Discussion');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="md:hidden bg-gray-800 p-4 sm:hidden flex justify-between items-center ">
      <div className="flex space-x-4  ">
        <Link href="/Discussion">
          <div
            className={`text-white hover:text-gray-300 cursor-pointer ${
              activeItem === 'Discussion' ? 'font-bold' : ''
            }`}
            onClick={() => handleItemClick('Discussion')}
          >
            <h2>Discussion Forums</h2>
          </div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/Market">
          <div
            className={`text-white hover:text-gray-300 cursor-pointer ${
              activeItem === 'Market' ? 'font-bold' : ''
            }`}
            onClick={() => handleItemClick('Market')}
          >
            <h2>Market Stories</h2>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
