import React from "react";

const plans = [
  {
    title: "Level Up+ 2500",
    price: "2500 ֏",
    items: ["20 ԳԲ ինտերնետ", "1000 րոպե", "300 SMS", "35 երկրներ"],
  },
  {
    title: "Level Up+ 3000",
    price: "3000 ֏",
    items: ["30 ԳԲ ինտերնետ", "1500 րոպե", "300 SMS", "35 երկրներ"],
    highlight: true,
  },
  {
    title: "Level Up+ 4000",
    price: "4000 ֏",
    items: ["Անսահմանափակ ինտերնետ", "500 րոպե", "500 SMS", "35 երկրներ"],
  },
  {
    title: "Level Up+ 5000",
    price: "5000 ֏",
    items: ["Անսահմանափակ ինտերնետ", "3000 րոպե", "1000 SMS", "200 ՄԲ ռոումինգ"],
  },
];

export default function LevelUpPlans() {
  return (
    <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`rounded-2xl bg-white p-4 sm:p-5 md:p-6 text-center shadow-md transition
            ${plan.highlight ? "scale-100 sm:scale-105 ring-2 ring-[#7ad000]" : ""}`}
        >
          {/* Plan Title */}
          <h3 className="mb-3 sm:mb-4 rounded-xl bg-[#7ad000] py-2 sm:py-3 text-sm sm:text-base md:text-lg text-white font-semibold">
            {plan.title}
          </h3>

          {/* Plan Items */}
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
            {plan.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Price */}
          <div className="my-3 sm:my-5 text-[22px] sm:text-[26px] md:text-[28px] font-bold">
            {plan.price}
          </div>

          {/* Join Button */}
          <button className="rounded-lg bg-[#7ad000] px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-[16px] text-white transition hover:opacity-90">
            Միանալ
          </button>
        </div>
      ))}
    </div>
  );
}
