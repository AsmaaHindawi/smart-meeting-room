import { useState } from "react";

export default function BookMeetings() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    attendees: "",
    room: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Meeting request sent!");
    setForm({ title: "", date: "", time: "", duration: "", attendees: "", room: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-poppins">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">Schedule a Meeting</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-4 max-w-xl">
        <input type="text" name="title" placeholder="Meeting Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <div className="grid grid-cols-2 gap-4">
          <input type="date" name="date" value={form.date} onChange={handleChange} className="p-2 border rounded" required />
          <input type="time" name="time" value={form.time} onChange={handleChange} className="p-2 border rounded" required />
        </div>
        <input type="number" name="duration" placeholder="Duration (minutes)" value={form.duration} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="attendees" placeholder="Add Attendees (emails comma-separated)" value={form.attendees} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="room" placeholder="Preferred Room (optional)" value={form.room} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Submit Request</button>
      </form>
    </div>
  );
}
