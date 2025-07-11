const NotificationPanel = ({ notifications }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-full">
      <h3 className="text-lg font-semibold text-indigo-700 mb-2">Notifications</h3>
      <ul className="space-y-2 text-sm">
        {notifications.map((note, index) => (
          <li key={index} className="text-gray-700">
            • {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
