import React from "react";
import Quest1 from "./components/Quest1";
import Quest2 from "./components/Quest2";
import Copy from "./components/Copy";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl p-4">
        <h1 className="text-3xl font-bold mb-4">(주)보토 코딩테스트</h1>
        <Quest1 />
        <Quest2 />
        <Copy />
      </div>
    </div>
  );
};

export default App;
