import  QuickActions  from "./QuickActions";

import { UpcomingMeetings } from "./UpcomingMeetings";
import Topbar from "./Topbar";
import { FaCalendarAlt, FaFileAlt, FaVideo } from "react-icons/fa";

export default function Dashboard() {
  return (
     <div className="flex flex-col h-full bg-gray-50">
  <Topbar />
     <main className="p-6 space-y-6 overflow-auto flex-1">
        <QuickActions
        actions={[
          { label: "Schedule Meeting", icon: <FaCalendarAlt />, to: "/user/book" },
          { label: "Join Meeting", icon: <FaVideo />, to: "/user/join" },
          { label: "View Minutes", icon: <FaFileAlt />, to: "/user/minutes" },
        ]}
      />
      <UpcomingMeetings
        title="Upcoming Meetings"
        meetings={[
          { time: "11:00 AM", title: "Team Check-in", room: "Room A" },
          { time: "3:00 PM", title: "Client Call", room: "Room C" },
        ]}
      />
     </main>
    </div>
  );
}

