import React from "react"
export default function SearchBar() {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
            fill="nonea"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search blogs . . ."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary border border-black"
          />
        </div>
      </div>
    )
  }