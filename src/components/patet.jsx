import React from "react";
import PatetCard from "./PatetCard";

export default function Patet() {
  const db = [
    {
      name: "Level up+ 3000",
      internet: "30 ԳԲ ինտերնետ",
      rope: "1500 րոպե",
      sms: "SMS 300",
      aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
      gin: "3000 ֏",
    },
    {
      name: "Level up+ 4000",
      internet: "Անսահմանափակ ինտերնետ",
      rope: "700 րոպե",
      sms: "SMS 500",
      aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
      gin: "4000 ֏",
    },
    {
      name: "Level up+ 5000",
      internet: "Անսահմանափակ ինտերնետ",
      rope: "3000 րոպե",
      sms: "SMS 1000",
      aliq: "35 հեռուստաալիք՝ Uplay հարթակում",
      gin: "5000 ֏",
    },
    {
      name: "Unity 12500",
      internet: "Անսահմանափակ ինտերնետ",
      rope: "3000 րոպե",
      sms: "SMS 1000",
      aliq: "200+ հեռուստաալիք՝ Uplay հարթակում",
      gin: "12500 ֏",
    },
  ];

  return (
    <div className="mt-[100px] flex w-full flex-col justify-center gap-5 p-[100px]">
      <h1 className="text-3xl font-bold">Լավագույն առաջարկ</h1>

      <div className="flex w-full gap-5">
        {db.map((el, i) => (
          <PatetCard key={i} {...el} />
        ))}
      </div>
    </div>
  );
}


