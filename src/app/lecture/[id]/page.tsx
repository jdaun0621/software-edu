"use client";

import { useParams, useRouter } from "next/navigation";
import { lectures } from "@/data/lectures";
import { useCartStore } from "@/stores/useCartStore";

export default function LectureDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const lecture = lectures.find((l) => l.id === id);
  const addToCart = useCartStore((state) => state.addToCart);

   if (!lecture) return <div className="text-center text-red-600 font-semibold py-12">강의를 찾을 수 없습니다.</div>;

  return (
    <div className="bg-white py-12 px-6 sm:px-10 max-w-3xl mx-auto rounded-xl shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 border-b pb-4">{lecture.title}</h1>
      <div className="text-lg text-gray-700 leading-relaxed mb-6">
        <p className="mb-4">{lecture.description}</p>
        <ul className="space-y-2">
          <li><strong>카테고리:</strong> {lecture.category}</li>
          <li><strong>난이도:</strong> {lecture.difficulty}</li>
          <li><strong>가격:</strong> ₩{lecture.price.toLocaleString()}</li>
        </ul>
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
        onClick={() => {
          addToCart(lecture);
          router.push("/cart");
        }}
      >
        🛒 장바구니에 담기
      </button>
    </div>
  );
}
