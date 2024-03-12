import React from 'react';

function SearchBar({ handleSearch }) {
  return (
    <div className="mb-4 text-center ">
      <input
        type="text"
        placeholder="Search tasks..."
        className="border border-gray-300 rounded-md p-2 outline-none px-24 text-2xl"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
