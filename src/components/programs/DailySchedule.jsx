// DailySchedule.jsx
import React from "react";

const DailySchedule = () => {
  const schedules = [
    {
      id: 1,
      program: "Infant Program",
      schedule: [
        { time: "7:00 AM - 8:30 AM", activity: "Drop-off and free play" },
        { time: "8:30 AM - 9:00 AM", activity: "Breakfast" },
        {
          time: "9:00 AM - 10:30 AM",
          activity: "Tummy time and sensory activities",
        },
        { time: "10:30 AM - 11:00 AM", activity: "Snack time" },
        {
          time: "11:00 AM - 12:00 PM",
          activity: "Outdoor time (weather permitting)",
        },
        { time: "12:00 PM - 12:30 PM", activity: "Lunch" },
        { time: "12:30 PM - 3:00 PM", activity: "Naptime" },
        { time: "3:00 PM - 3:30 PM", activity: "Snack time" },
        {
          time: "3:30 PM - 5:30 PM",
          activity: "Playtime and creative activities",
        },
        { time: "5:30 PM - 6:00 PM", activity: "Pick-up" },
      ],
    },
    {
      id: 2,
      program: "Toddler Program",
      schedule: [
        { time: "7:00 AM - 8:30 AM", activity: "Drop-off and free play" },
        { time: "8:30 AM - 9:00 AM", activity: "Breakfast" },
        { time: "9:00 AM - 10:00 AM", activity: "Circle time and storytime" },
        { time: "10:00 AM - 11:00 AM", activity: "Art and craft activities" },
        { time: "11:00 AM - 11:30 AM", activity: "Outdoor play" },
        { time: "11:30 AM - 12:00 PM", activity: "Lunch" },
        { time: "12:00 PM - 2:00 PM", activity: "Naptime" },
        { time: "2:00 PM - 2:30 PM", activity: "Snack time" },
        { time: "2:30 PM - 4:00 PM", activity: "Imaginative play and music" },
        { time: "4:00 PM - 6:00 PM", activity: "Pick-up and free play" },
      ],
    },
    // Add more programs and schedules here
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Schedule</h2>
      {schedules.map(schedule => (
        <div key={schedule.id} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {schedule.program}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {schedule.schedule.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {item.time}
                </h4>
                <p className="text-gray-600">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailySchedule;
