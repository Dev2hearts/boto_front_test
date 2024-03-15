import React, { useState } from "react";
import axios from "axios";

const Quest1: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    if (search) {
      try {
        const res = await axios.post("http://localhost:3001", {
          data: search,
        });
        setSearchResults(res.data);
        setSearchValue(search);
      } catch (err) {
        setSearchResults([]);
        console.log("에러 발생", err);
      }
    }
    console.log(searchResults);
  };

  return (
    <div className="bg-white rounded p-4 mb-6">
      <h2 className="text-lg font-bold mb-2">문제1.</h2>
      <span className="mb-2 block">
        검색의 결과물을 배열로 받았습니다. 배열 값으로 u 태그와 li 태그로 목록을
        화면에 뿌리고 내가 검색한 검색어를 &lt;b&gt;태그로 bold 처리하는 내용을
        작성해주세요.
      </span>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="검색어를 입력해주세요."
        className="border border-gray-300 p-2 rounded-md mr-2 w-full sm:w-auto"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        검색
      </button>
      <div>
        <h3 className="text-lg font-bold mb-2">문제1 결과</h3>
        {searchResults.length > 0 ? (
          <ul>
            <li>
              <b className="font-bold">{searchValue}</b> 의 검색내용
            </li>
            {searchResults.map((result, index) => (
              <li key={index} className="ml-4">
                <b className="font-bold">{searchValue}</b>
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-yellow-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 18a1 1 0 100-2 1 1 0 000 2zM10 2a1.5 1.5 0 011.5 1.415L11.5 17H8.5l-.5-13.585A1.5 1.5 0 019 2h1zM11 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold">주의!</p>
                <p className="text-sm">
                  node API Server 가 가동 중인지 확인 해주세요! 터미널에
                  <br />
                  <code>node/api/api.ts</code> 를 입력해주세요!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quest1;
