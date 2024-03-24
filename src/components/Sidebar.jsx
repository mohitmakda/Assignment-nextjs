"use client";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Discussion Forum", src: "Chat" },
    { title: "Market Stories" },
    { title: "Sentiment", src: "", gap: true },
    { title: "Market ", src: "" },
    { title: "Sector", src: "" },
    { title: "Watchlist", src: "" },
    { title: "Events ", src: "", gap: true },
    { title: "News/Interview", src: "" },
  ];

  return (
    <div className=" fixed top-0 left-0 h-full md:relative">
      <div
        className={` ${
          open ? "w-72" : "w-0 bg-inherit"
        } bg-gray-800 h-screen p-5 pt-8 duration-300 `}
        style={{ scrollBehavior: 'smooth' }}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-10 top-80 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180 right-0"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/Profileimg.tmp"
            className={`cursor-pointer duration-500 w-14 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hello, user
          </h1>
          <img
            src="/assets/Notification.png"
            className={`cursor-pointer duration-500  ${
              "w-8"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.src && (
                <img src={`/assets/${Menu.src}.png`} className="w-6" />
              )}
              {!Menu.src && <div className="w-6" />}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 flex-grow`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
