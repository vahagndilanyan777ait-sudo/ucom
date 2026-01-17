import React from "react";
import "./levelupplans.css";


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
<div className="plans">
{plans.map((plan, i) => (
<div key={i} className={`card ${plan.highlight ? "active" : ""}`}>
<h3>{plan.title}</h3>
<ul>
{plan.items.map((item, idx) => (
<li key={idx}>{item}</li>
))}
</ul>
<div className="price">{plan.price}</div>
<button className="button1">Միանալ</button>
</div>
))}
</div>
);
}