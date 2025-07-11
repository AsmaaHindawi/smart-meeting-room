import { FaCalendarAlt, FaVideo, FaFileAlt } from "react-icons/fa";
import Topbar from "./Topbar";
import QuickActions from "./QuickActions";
import MeetingList from "./MeetingList";

export default function EmployeeDashboard() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Topbar />
      <main className="p-6 space-y-6 overflow-auto flex-1">
        <QuickActions
          actions={[
            { label: "Schedule Meeting", icon: <FaCalendarAlt />, to: "/book-meeting" },
            { label: "Join Now", icon: <FaVideo />, to: "/meeting/active" },
            { label: "View Minutes", icon: <FaFileAlt />, to: "/minutes/review" },
          ]}
        />

        <MeetingList
          title="Upcoming Meetings"
          meetings={[
            { time: "10:00 AM", title: "Team Sync", room: "Room A" },
            { time: "1:30 PM", title: "Budget Review", room: "Room B" },
          ]}
        />
</main>

</div>  );
}
