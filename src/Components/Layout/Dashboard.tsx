import { Outlet } from "react-router-dom";
import DashSidebar from "../Static/DashSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <div className="sticky top-0">
        <DashSidebar />
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
