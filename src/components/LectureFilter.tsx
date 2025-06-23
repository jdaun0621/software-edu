"use client";

import { useState } from "react";
import { Lecture } from "@/types/lecture";

export function LectureFilter({ setFiltered, allLectures }: {
  setFiltered: (lectures: Lecture[]) => void;
  allLectures: Lecture[];
}) {
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    let result = allLectures;
    if (category) {
      result = result.filter((lec) => lec.category === category);
    }
    setFiltered(result);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
      <select
        className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">전체</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="AI">AI</option>
      </select>
      <button className="mt-4 sm:mt-0 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition" 
      onClick={handleFilter}>
        필터 적용
      </button>
    </div>
  );
}