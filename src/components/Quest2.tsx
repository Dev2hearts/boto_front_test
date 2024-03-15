import React, { useState } from "react";

const Quest2: React.FC = () => {
  const [number, setNumber] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력 가능하도록 처리
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  };

  return (
    <div className="bg-white rounded p-4">
      <h2 className="text-lg font-bold mb-2">문제2.</h2>
      <span>
        하나의 &lt;input /&gt;이 있습니다. 이 때 숫자만 입력이 가능하게 하고
        숫자를 입력받으면 1000단위마다, 를 추가해주세요 ex&#41; 1,000,000
      </span>
      <div>
        <h3 className="text-lg font-bold mb-2">문제2 결과</h3>
        <input
          className="priceText border border-gray-300 p-2 rounded-md w-full sm:w-auto"
          type="text"
          value={number}
          placeholder="숫자를 입력해주세요."
          onChange={handleNumberChange}
        ></input>
      </div>
    </div>
  );
};

export default Quest2;
