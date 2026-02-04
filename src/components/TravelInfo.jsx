import React from "react";
import { db } from "../lib/db";

// const travelData = [
//   {
//     id: 1,
//     title: "uTravel ինտերնետ փաթեթ",
//     text: "Ճամփորդելիս ուր էլ որ լինեք, Ucom-ի հետ միշտ կապի մեջ եք։ Կիպրոսում, ԱՄԷ, Եգիպտոսում, Իտալիայում, Վրաստանում և այլ երկրներում օգտագործեք uTravel ռոումինգ ինտերնետ փաթեթներից մեկը։",
//     image:
//       "https://www.ucom.am/storage/files/banner-5-2-1-290x_-quality(75)-webp(80).png?token=826d56d1aa478de7ce5141d4095573df",
//     button: "Մանրամասներ",
//     type: "half",
//   },
//   {
//     id: 2,
//     title: "Ինտերնետ ռոումինգում փաթեթներ",
//     text: "Եթե ցանկանում եք արտերկրում լինել Ձեր հասանելի ցանցի տիրույթում, օգտագործեք ինտերնետ ռոումինգում փաթեթներից մեկը։",
//     image:
//       "https://www.ucom.am/storage/files/banner-3-2-2-290x_-quality(75)-webp(80).png?token=ed379152fa2e7a1ac7a08ed7b4f38287",
//     button: "Մանրամասներ",
//     type: "half",
//   },
//   {
//     id: 3,
//     title: "Զանգ ռոումինգում",
//     text: "Եգիպտոս, Վրաստան, Հունաստան, ԱՄԷ, Կիպրոս, Իտալիա, Հայաստան և այլ երկրներից ելքային և մուտքային զանգեր կապի մեջ մնալու համար։",
//     image:
//       "https://www.ucom.am/storage/files/banner-4-1-1-290x_-quality(75)-webp(80).png?token=f581f79c09b3c3fa46dfbf537b2386ce",
//     button: "Մանրամասներ",
//     type: "full",
//   },
// ];
const traveldata = db.traveldata

const TravelInfo = () => {
  return (
    <section className="bg-[#f7f8f6] px-5 py-16 md:px-20">
      <div className="grid gap-6 md:grid-cols-2">
        {travelData.map((item) => (
          <div
            key={item.id}
            className={`flex min-h-[300px] items-center justify-between rounded-[28px] bg-white p-9 ${
              item.type === "full" ? "md:col-span-2" : ""
            } flex-col md:flex-row text-center md:text-left`}
          >
            {/* Content */}
            <div className={`mb-6 max-w-full md:mb-0 ${item.type === "half" ? "md:max-w-[55%]" : "md:max-w-[55%]"}`}>
              <h3 className="mb-4 text-[28px] font-bold">{item.title}</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-[#555]">{item.text}</p>
              <button className="rounded-[14px] border-[1.5px] border-[#7ad400] bg-transparent px-7 py-3.5 font-semibold transition hover:bg-[#7ad400] hover:text-white">
                {item.button}
              </button>
            </div>

            {/* Image */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[220px] md:ml-6"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelInfo;
