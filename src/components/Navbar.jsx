"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/80 backdrop-blur-md border-b border-white/10 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          World<span className="text-fuchsia-400">Fashion</span>Now
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/fashion-guide" className="text-gray-300 hover:text-white">Fashion Guide</a>
          <a href="/india-fashion-guide" className="text-gray-300 hover:text-white">India Fashion</a>
          <a href="/global-fashion-trends" className="text-gray-300 hover:text-white">Global Trends</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col py-4 px-6 space-y-4 text-gray-300 text-sm">
            <a href="/">Home</a>
            <a href="/fashion-guide">Fashion Guide</a>
            <a href="/india-fashion-guide">India Fashion</a>
            <a href="/global-fashion-trends">Global Trends</a>
          
          </nav>
        </div>
      )}
    </header>
  );
}
