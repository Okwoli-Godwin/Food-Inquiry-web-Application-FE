import { Outlet } from "react-router-dom";
import DashSidebar from "../Static/DashSidebar";

const Dashboard = () => {
  return (
    <div className="flex ">
      <DashSidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
