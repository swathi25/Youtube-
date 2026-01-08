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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto] p-3 mx-4 gap-6 max-w-6xl mx-auto items-center justify-items-center">
        <div className="flex items-center gap-2 col-span-1">
          <img
            onClick={() => {
              toggleMenuHandler();
            }}
            className="h-8 w-8 cursor-pointer"
            alt="menu"
            src={MENU_ICON}
          />
          <img
            className="h-24 w-24 cursor-pointer"
            src={YOUTUBE_ICON}
            alt="youtube icon"
          />
        </div>
        <div className="flex items-center relative w-full max-w-md mx-auto">
          <input
            className="flex-1 px-5 py-3.5 text-lg border border-gray-200 rounded-l-full shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className="px-5 py-3.5 text-lg bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-r-full font-medium transition-all duration-200 hover:shadow-md">
            Search
          </button>
          {showSuggestions && (
            <div className="!bg-white border border-gray-300 rounded-xl shadow-2xl z-[1000] mt-2 max-h-64 overflow-y-auto w-full absolute top-full left-0 right-0 backdrop-blur-sm">
              <ul>
                {suggestions.map((s) => (
                  <li className="py-2 shadow-sm">{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-end ml-auto shrink-0">
          <img className="h-8 w-12 " alt="user-icon" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Head;
