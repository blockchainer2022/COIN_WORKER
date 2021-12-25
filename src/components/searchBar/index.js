import "./style.css";
import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
  return (
    <form action="">
      <div className="banner-searchBar flex items-center rounded-xl">
        <span className="text-2xl text-gray-400 block mr-4">
          <IoSearch />
        </span>
        <input
          type="text"
          className="focus:outline-none text-xl"
          placeholder="Search Job ID"
        />
      </div>
    </form>
  );
};

export default SearchBar;
