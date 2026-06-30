import AppLayout from "../layouts/AppLayout";
import MonitoringHeader from "../components/monitoring/MonitoringHeader";
import SessionCard from "../components/monitoring/SessionCard";
import SessionStats from "../components/monitoring/SessionStats";
import EventTimeline from "../components/monitoring/EventTimeline";

export default function Monitoring() {
  return (
    <AppLayout>
      <MonitoringHeader />

      {/* Top Row */}
      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <SessionCard />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <SessionStats />
        </div>
      </div>
      
      {/* Timeline */}
      <div className="mt-6 mb-8">
        <EventTimeline />
      </div>
    </AppLayout>
  );
}