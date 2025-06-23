"use client";

import { useState } from "react";
import { lectures } from "@/data/lectures";
import { Lecture } from "@/types/lecture";
import { LectureCard } from "@/components/LectureCard";
import { LectureFilter } from "@/components/LectureFilter";

export default function HomePage() {
  const [filtered, setFiltered] = useState<Lecture[]>(lectures);

  return (
    <main className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <section className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">전체 강의</h1>
      <LectureFilter setFiltered={setFiltered} allLectures={lectures} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filtered.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </div>
      </section>
    </main>
  );
}