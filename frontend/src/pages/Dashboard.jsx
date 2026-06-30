import AppLayout from "../layouts/AppLayout";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import QuickStats from "../components/dashboard/QuickStats";
import AIHealthCard from "../components/dashboard/AIHealthCard";
import LiveCameraCard from "../components/dashboard/LiveCameraCard";
import DriverStatusCard from "../components/dashboard/DriverStatusCard";
import RecentAlerts from "../components/dashboard/RecentAlerts";

export default function Dashboard() {
  return (
  <AppLayout>
    {/* Welcome */}
    <WelcomeBanner />

    {/* Main Bento Layout */}
    <div className="mt-8 grid grid-cols-12 gap-6">

      {/* Live Camera */}
      <div className="col-span-8">
        <LiveCameraCard />
      </div>

      {/* Driver Status */}
      <div className="col-span-4">
        <DriverStatusCard />
      </div>

      {/* Quick Stats */}
      <div className="col-span-12">
        <QuickStats />
      </div>

      {/* AI Health */}
      <div className="col-span-5">
        <AIHealthCard />
      </div>

      {/* Alerts */}
      <div className="col-span-7">
        <RecentAlerts />
      </div>

    </div>
  </AppLayout>
  );
}