import React from "react";
import PatetCard from "./PatetCard";
import { db } from "../lib/db";

export default function Patet() {
//   const db = [
//     {
//       name: "Level up+ 3000",
//       internet: "30 ԳԲ ինտերնետ",
//       rope: "1500 րոպե",
//       sms: "SMS 300",
//       aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
//       gin: "3000 ֏",
//     },
//     {
//       name: "Level up+ 4000",
//       internet: "Անսահմանափակ ինտերնետ",
//       rope: "700 րոպե",
//       sms: "SMS 500",
//       aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
//       gin: "4000 ֏",
//     },
//     {
//       name: "Level up+ 5000",
//       internet: "Անսահմանափակ ինտերնետ",
//       rope: "3000 րոպե",
//       sms: "SMS 1000",
//       aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
//       gin: "5000 ֏",
//     },
//     {
//       name: "Unity 12500",
//       internet: "Անսահմանափակ ինտերնետ",
//       rope: "3000 րոպե",
//       sms: "SMS 1000",
//       aliq: "200+ հեռուստաալիք՝ Uplay հարթակում",
//       gin: "12500 ֏",
//     },
//   ];

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-10 lg:px-24">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Լավագույն առաջարկ
      </h1>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 w-full justify-center">
        {db.patet.map((el, i) => (
          <PatetCard key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
