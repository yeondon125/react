import React from "react";
import axios from "axios";

const today = new Date();

// 내일 날짜 객체 만들기
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

// 오늘 날짜 구성
const year1 = today.getFullYear();
const month1 = String(today.getMonth() + 1).padStart(2, "0");
const day1 = String(today.getDate()).padStart(2, "0");

// 내일 날짜 구성
const year2 = tomorrow.getFullYear();
const month2 = String(tomorrow.getMonth() + 1).padStart(2, "0");
const day2 = String(tomorrow.getDate()).padStart(2, "0");

// 객체화
const nowdate = {
  today: {
    date: today,
    year: year1,
    month: month1,
    day: day1,
    formattedDate: `${year1}${month1}${day1}`, // 예: 20250714
  },
  tomorrow: {
    date: tomorrow,
    year: year2,
    month: month2,
    day: day2,
    formattedDate: `${year2}${month2}${day2}`, // 예: 20250715
  },
};

// api 요청 후 응답 데이터
const mealData = {
  today: {
    date: `${today.month}월 ${today.day}일`,
    breakfast: ["시리얼", "우유", "바나나"],
    lunch: ["김치찌개", "쌀밥", "계란말이"],
    dinner: ["닭가슴살 샐러드", "고구마", "방울토마토"],
  },
  tomorrow: {
    date: "2025년 7월 15일",
    breakfast: ["토스트", "계란후라이", "오렌지 주스"],
    lunch: ["짜장면", "단무지"],
    dinner: ["연어 스테이크", "아스파라거스 구이"],
  },
};

// 각 식단을 보여주는 카드 컴포넌트
const MealCard = ({ title, meal }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
    <ul className="space-y-2">
      {meal.map((item, index) => (
        <li key={index} className="text-gray-600">
          - {item}
        </li>
      ))}
    </ul>
  </div>
);

// 날짜별 식단 전체를 보여주는 컴포넌트
const DailyMealPlan = ({ day, data }) => (
  <div className="bg-gray-100 shadow-inner rounded-2xl p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      {day} ({data.date})
    </h2>
    <MealCard title="☀️ 조식" meal={data.breakfast} />
    <MealCard title="☀️ 중식" meal={data.lunch} />
    <MealCard title="🌙 석식" meal={data.dinner} />
  </div>
);

const MealApp = () => {
  return (
    // 전체 앱을 감싸는 컨테이너
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-white mb-10">
        오늘과 내일의 식단
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* '오늘'의 식단 */}
        <DailyMealPlan day="오늘" data={mealData.today} />
        {/* '내일'의 식단 */}
        <DailyMealPlan day="내일" data={mealData.tomorrow} />
      </div>
    </div>
  );
};

export default MealApp;
