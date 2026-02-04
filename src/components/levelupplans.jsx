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
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`rounded-2xl bg-white p-5 text-center shadow-md transition
            ${plan.highlight ? "scale-105 ring-2 ring-[#7ad000]" : ""}`}
        >
          <h3 className="mb-4 rounded-xl bg-[#7ad000] py-3 text-white font-semibold">
            {plan.title}
          </h3>

          <ul className="space-y-2 text-sm text-gray-700">
            {plan.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="my-5 text-[28px] font-bold">
            {plan.price}
          </div>

          <button className="rounded-lg bg-[#7ad000] px-5 py-3 text-white transition hover:opacity-90">
            Միանալ
          </button>
        </div>
      ))}
    </div>
  );
}
