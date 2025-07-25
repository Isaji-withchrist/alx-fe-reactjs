// SearchBar.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search by title, ingredient..."
        value={input}
        onChange={handleSearch}
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
