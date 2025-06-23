"use client";

import Link from "next/link";
import { Lecture } from "@/types/lecture";

export function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <Link href={`/lecture/${lecture.id}`}>
      <div className="border rounded p-4 hover:shadow transition">
        <h2 className="text-lg text-gray-600 font-semibold mb-2">{lecture.title}</h2>
        <p className="text-sm text-gray-500">{lecture.category} / {lecture.difficulty}</p>
        <p className="text-sm text-blue-500 font-semibold mt-2">₩{lecture.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
