import { Lecture } from "@/types/lecture";

export const lectures: Lecture[] = [
  {
    id: "1",
    title: "React 입문 강의",
    category: "Frontend",
    difficulty: "기초",
    price: 12000,
    description: "React를 처음 배우는 분들을 위한 입문 강의입니다."
  },
  {
    id: "2",
    title: "Node.js 백엔드 실무",
    category: "Backend",
    difficulty: "심화",
    price: 18000,
    description: "실무 중심의 Node.js 백엔드 강의입니다."
  },
  {
    id: "3",
    title: "AI 모델링 입문",
    category: "AI",
    difficulty: "기초",
    price: 20000,
    description: "AI 모델링을 위한 기초 개념과 실습."
  }
];