"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DiscussionForum from "../components/DiscussionForum";
import ExamplePage from "../components/ExamplePage";

import MarketStories from "../components/MarketStories";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col md:flex-row md:w-full overflow-y-auto">
          <div className="md:w-3/4">
            <DiscussionForum />
          </div>
          <div className="md:w-1/4">
            <MarketStories />
          </div>
        </div>
      </div>
    </div>
  );
}
