import { useState } from "react";
import { FaCalendarAlt, FaVideo, FaFileAlt } from "react-icons/fa";

const QuickActions = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleScheduleClick = () => {
//     setIsModalOpen(true);
//   };

  return (
    <div className="flex gap-4 flex-wrap">
      {/* <button
        onClick={handleScheduleClick}
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        <FaCalendarAlt />
        <span>Schedule Meeting</span>
      </button> */}
      <a
        href="/meeting/active"
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        <FaVideo />
        <span>Join Now</span>
      </a>
      <a
        href="/MinutesPage"
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        <FaFileAlt />
        <span>View Minutes</span>
      </a>


      {/* {isModalOpen && <ScheduleMeetingModal onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
}

export default QuickActions;
