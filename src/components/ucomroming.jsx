import React from "react";

const cardsData = [
  {
    title: "Ակտիվացում *121#",
    text: "Արտերկրում Ձեր Ucom հեռախոսահամարից օգտվելու համար պարզապես հավաքեք ակտիվացման կոդը և սկսեք օգտագործել ռոումինգ ծառայությունը։",
    button: "Ավելին",
  },
  {
    title: "Խորհուրդներ ռոումինգի համար",
    text: "Ucom ռոումինգի հետ կապված մեր խորհուրդները կօգնեն Ձեզ խուսափել անսպասելի ծախսերից և խնդիրներից։",
    button: "Ավելին",
  },
  {
    title: "Այցելությունների համար",
    text: "Նախքան ճանապարհորդելը ծանոթացեք Ձեր երկրում գործող ռոումինգ ծառայությունների պայմաններին։",
    button: "Ավելին",
  },
  {
    title: "Ռոումինգ ծառայություններ օդում",
    text: "Օգտվեք AeroMobile ռոումինգ ծառայությունից և մնացեք կապի մեջ նույնիսկ թռիչքի ընթացքում։",
    button: "Ավելին",
  },
];

const Ucomroming = () => {
  return (
    <section className="bg-gray-100 px-5 md:px-20 py-10 md:py-16">
      <h2 className="text-3xl font-bold mb-10 text-black text-center md:text-left">
        Ucom ռոումինգ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[420px] shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-black">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {card.text}
            </p>
            <button className="mt-6 self-start px-7 py-3 border-2 border-green-400 rounded-lg font-semibold text-black hover:bg-green-400 hover:text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ucomroming;
