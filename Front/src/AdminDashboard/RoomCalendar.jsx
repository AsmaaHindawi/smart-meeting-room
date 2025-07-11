import { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import { localizer } from "./calendarSetup";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaUsers, FaPhone } from "react-icons/fa";

const RoomCalendar = () => {
  const [events] = useState([
    {
      title: "Team Sync",
      start: new Date(2025, 6, 7, 10, 0),
      end: new Date(2025, 6, 7, 11, 0),
      room: "Room A",
      icon: <FaUsers />,
    },
    {
      title: "Client Call",
      start: new Date(2025, 6, 8, 15, 0),
      end: new Date(2025, 6, 8, 16, 0),
      room: "Room C",
      icon: <FaPhone />,
    },
  ]);

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  const handleNavigate = (action) => {
    const newDate = new Date(date);
    if (action === "TODAY") {
      setDate(new Date());
    } else if (action === "NEXT") {
      if (view === Views.MONTH) newDate.setMonth(newDate.getMonth() + 1);
      else if (view === Views.WEEK) newDate.setDate(newDate.getDate() + 7);
      else if (view === Views.DAY) newDate.setDate(newDate.getDate() + 1);
      setDate(newDate);
    } else if (action === "BACK") {
      if (view === Views.MONTH) newDate.setMonth(newDate.getMonth() - 1);
      else if (view === Views.WEEK) newDate.setDate(newDate.getDate() - 7);
      else if (view === Views.DAY) newDate.setDate(newDate.getDate() - 1);
      setDate(newDate);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-6xl mx-auto mt-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-indigo-700"> Room Availability</h2>
        <p className="text-gray-500 mt-1 text-sm">Switch between month, week, or day views</p>
      </div>

      {/* Custom Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavigate("TODAY")}
            className="px-4 py-1.5 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Today
          </button>
          <button
            onClick={() => handleNavigate("BACK")}
            className="px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 transition"
          >
            Back
          </button>
          <button
            onClick={() => handleNavigate("NEXT")}
            className="px-3 py-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 transition"
          >
            Next
          </button>
          <h3 className="ml-4 text-lg font-semibold text-gray-700">
            {date.toLocaleString("default", { month: "long", year: "numeric" })}
          </h3>
        </div>

        {/* View Switch Buttons */}
        <div className="flex items-center gap-2">
          {["month", "week", "day"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1.5 rounded-md font-medium transition ${
                view === v
                  ? "bg-indigo-100 text-indigo-700"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Component */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={date}
          view={view}
          onView={setView}
          onNavigate={setDate}
          views={["month", "week", "day"]}
          min={new Date(1970, 1, 1, 8, 0)}
          max={new Date(1970, 1, 1, 18, 0)}
          style={{ height: "70vh" }}
          eventPropGetter={() => ({
            className:
              "bg-indigo-500 text-white text-sm px-3 py-1 rounded-md shadow-sm hover:bg-indigo-600 transition",
          })}
          components={{
            event: ({ event }) => (
              <div className="flex items-center gap-2">
                {event.icon}
                <span>{event.title}</span>
              </div>
            ),
          }}
          toolbar={false} // Disable default toolbar
        />
      </div>
    </div>
  );
};

export default RoomCalendar;
