import { Outlet } from "react-router-dom";
import DashSidebar from "../Static/DashSidebar";

import MobileHeader from "../Static/MobileHeader";

const Dashboard = () => {
  return (
    <div className="flex h-full lg:flex-col">
      <div className="sticky top-0 lg:hidden">
        <DashSidebar />
      </div>
      <div className="sticky top-0 ">
        <MobileHeader />
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
