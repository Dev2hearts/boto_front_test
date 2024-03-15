import React from "react";

const Copy: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-gray-200 text-gray-800 rounded-full py-1 px-4">
          사용 스택
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-blue-200 text-blue-800 rounded-full py-1 px-4">
          React
        </div>
        <div className="bg-green-200 text-green-800 rounded-full py-1 px-4">
          Axios
        </div>
        <div className="bg-yellow-200 text-yellow-800 rounded-full py-1 px-4">
          TypeScript
        </div>
        <div className="bg-purple-200 text-purple-800 rounded-full py-1 px-4">
          Tailwind
        </div>
        <div className="bg-red-200 text-red-800 rounded-full py-1 px-4">
          Node.js
        </div>
      </div>
      <p className="text-gray-600 mb-2">
        작업 일자: <span className="font-bold">2024.03.13</span> ~{" "}
        <span className="font-bold">2024.03.15</span> (총 3일)
      </p>
      <p className="text-gray-600 mb-4">
        지원자: <span className="font-bold">박지성</span>
      </p>
    </div>
  );
};

export default Copy;
