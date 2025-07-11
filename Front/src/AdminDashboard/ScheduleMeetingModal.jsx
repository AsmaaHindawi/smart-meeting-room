import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const ScheduleMeetingModal = ({ onClose }) => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    attendees: "",
    room: "",
    recurring: false,
    video: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Data:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-indigo-700">Schedule Meeting</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Meeting Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex gap-2">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>

          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 1h)"
            value={form.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="text"
            name="attendees"
            placeholder="Add Attendees (Emails or Names)"
            value={form.attendees}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <select
            name="room"
            value={form.room}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Room</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
            <option value="Room C">Room C</option>
          </select>

          {/* Features Section */}
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Features</h4>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="recurring"
                  checked={form.recurring}
                  onChange={handleChange}
                />
                Recurring
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="video"
                  checked={form.video}
                  onChange={handleChange}
                />
                Video Conferencing
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
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
  );
};

export default ScheduleMeetingModal;
