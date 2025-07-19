import React from 'react'

function Footer({completedTasks, totalTasks, remaningTasks}) {
  return (
    <div className="w-full max-w-lg mx-auto px-6 py-4 mt-8 mb-4 bg-white border-t border-gray-200 rounded-b-lg shadow flex flex-col items-center text-center">
      <h3 className="text-2xl font-semibold text-blue-600 mb-1">
        Total tasks: {totalTasks}
      </h3>
      <h3 className="text-base text-gray-700 mb-2">
        You have completed <span className="font-bold text-green-600">{completedTasks}</span> tasks and your remaining tasks are <span className="font-bold text-red-500">{remaningTasks}</span>
      </h3>
      <p className="text-gray-400 italic text-sm mt-2">
        "Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer
      </p>
    </div>
  )
}

export default Footer   