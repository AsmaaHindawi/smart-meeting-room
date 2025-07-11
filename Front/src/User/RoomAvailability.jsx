export const RoomAvailability = () => (
  <section className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-xl font-bold mb-4">Room Availability</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Room A', 'Room B', 'Room C', 'Room D'].map((room, i) => (
        <div
          key={room}
          className={`rounded p-4 text-white text-center font-semibold ${
            i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {room}
        </div>
      ))}
    </div>
  </section>
);