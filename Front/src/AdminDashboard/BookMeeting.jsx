import { useState } from "react";
import { FaCalendarAlt, FaVideo, FaRedo, FaUserPlus } from "react-icons/fa";

const rooms = ["Room A", "Room B", "Room C"];

export default function BookMeeting() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    attendees: "",
    room: rooms[0],
    recurring: false,
    video: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting booked:", form);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-700">Book a Meeting</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center gap-2"
        >
          <FaCalendarAlt />
          Schedule Meeting
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Schedule a Meeting</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Meeting Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

              <div className="flex gap-4">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <input
                type="number"
                name="duration"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

              <input
                type="text"
                name="attendees"
                placeholder="Attendees (emails, comma separated)"
                value={form.attendees}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              <select
                name="room"
                value={form.room}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {rooms.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>

              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="recurring"
                    checked={form.recurring}
                    onChange={handleChange}
                  />
                  <FaRedo className="text-indigo-600" /> Recurring
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="video"
                    checked={form.video}
                    onChange={handleChange}
                  />
                  <FaVideo className="text-indigo-600" /> Video Conferencing
                </label>
              </div>

              {/* Room Availability Preview (simple color preview) */}
              <div className="mt-4">
                <label className="block mb-1 font-medium text-sm">Room Availability</label>
                <div className="flex gap-2">
                  {rooms.map((room) => (
                    <span
                      key={room}
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        room === form.room ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {room}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
