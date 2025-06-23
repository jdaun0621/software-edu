"use client";

import { useCartStore } from "@/stores/useCartStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCartStore();
  const router = useRouter();

  const handleCheckout = () => {
    clearCart();
    router.push("/my-courses");
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>
      {items.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((lecture) => (
            <li key={lecture.id} className="border p-4 rounded">
              <h2 className="font-semibold">{lecture.title}</h2>
              <p>{lecture.category} / {lecture.difficulty}</p>
              <p>₩{lecture.price.toLocaleString()}</p>
              <button className="text-sm text-red-500 mt-2" onClick={() => removeFromCart(lecture.id)}>
                제거하기
              </button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded" onClick={handleCheckout}>
          결제하기
        </button>
      )}
    </main>
  );
}
