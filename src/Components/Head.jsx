import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  MENU_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchcache = useSelector((store) => store.search);
  useEffect(() => {
    if (searchQuery.length === 0) {
      setSuggestions([]);
      return;
    }
    if (searchcache[searchQuery]) {
      setSuggestions(searchcache[searchQuery]);
    } else {
      const timer = setTimeout(() => getSearchSuggestions(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-16">
      <div className="flex items-center px-6 h-full">
        {/* Left */}
        <div className="flex items-center gap-2">
          <img
            onClick={toggleMenuHandler}
            className="h-8 w-8 cursor-pointer"
            alt="menu"
            src={MENU_ICON}
          />
          <img
            className="h-16 w-20 cursor-pointer"
            src={YOUTUBE_ICON}
            alt="youtube icon"
          />
        </div>

        {/* Center */}
        <div className="flex-1 flex justify-center relative">
          <div className="flex items-center w-full max-w-xl">
            <input
              className="flex-1 px-5 py-3.5 text-lg border rounded-l-full"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="px-5 py-3.5 bg-gray-100 rounded-r-full">
              Search
            </button>
          </div>

          {showSuggestions && (
            <div className="absolute top-full mt-2 w-full max-w-xl bg-white shadow-xl rounded-xl">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-4 hover:bg-gray-100">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="ml-auto">
          <img className="h-8 w-12" alt="user-icon" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Head;
