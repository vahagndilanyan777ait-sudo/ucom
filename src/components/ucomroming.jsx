import "./Ucomroming.css";

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
    <section className="roaming">
      <h2 className="roaming-title">Ucom ռոումինգ</h2>

      <div className="roaming-grid">
        {cardsData.map((card, index) => (
          <div className="roaming-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button>{card.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ucomroming;
