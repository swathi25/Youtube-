import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-56 bg-white border-r border-gray-200 pt-4 shrink-0">
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
