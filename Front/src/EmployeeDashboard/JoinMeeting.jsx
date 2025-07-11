export default function JoinMeeting() {
  const meetings = [
    { id: 1, title: "HR Review", time: "2:00 PM", link: "https://zoom.us/abc123" },
  ];

  return (
    <div className="pt-6 pr-6 pb-6 pl-0 bg-gray-50 font-poppins min-h-screen">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">Join a Meeting</h2>
      {meetings.length ? (
        meetings.map((m) => (
          <div key={m.id} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="text-sm text-gray-600">Time: {m.time}</p>
            <a
              href={m.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Join via Zoom
            </a>
          </div>
        ))
      ) : (
        <p>No live meetings right now.</p>
      )}
    </div>
  );
}
