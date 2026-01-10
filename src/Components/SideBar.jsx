import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="fixed top-16 left-0 w-30 h-[calc(100vh-64px)] bg-white border-r border-gray-200 overflow-y-auto">
      <ul className="font-bold space-y-4 py-4 px-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
      </ul>

      <h1 className="font-bold text-sm text-black ">Subscriptions</h1>

      <ul className="space-y-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
