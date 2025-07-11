export const PastMeetings = () => (
  <section className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-xl font-bold mb-4">Past Meetings</h2>
    <input
      type="text"
      placeholder="Search by keyword or attendee"
      className="w-full mb-4 p-2 border rounded"
    />
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <div className="font-semibold">Sprint Planning</div>
          <div className="text-sm text-gray-500">Status: Pending</div>
        </div>
        <div className="flex gap-2">
          <button className="bg-indigo-500 text-white px-3 py-1 rounded">Edit</button>
          <button className="bg-gray-500 text-white px-3 py-1 rounded">Export</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded">Share</button>
        </div>
      </div>
    </div>
  </section>
);