import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {" "}
      {/* Full viewport, no scroll on flex */}
      <SideBar />
      <div className="flex-1 overflow-y-auto pt-14 pl-4 pr-4">
        {" "}
        {/* Scroll only content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
