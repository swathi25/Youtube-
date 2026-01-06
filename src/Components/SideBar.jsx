import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 space-y-6">
      <ul className="font-bold space-y-2">
        <li>Home</li>
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
