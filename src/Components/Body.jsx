import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="pt-20 flex">
      <SideBar />
      <div className="ml-56 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
