import "./TravelInfo.css";

const travelData = [
  {
    id: 1,
    title: "uTravel ինտերնետ փաթեթ",
    text: "Ճամփորդելիս ուր էլ որ լինեք, Ucom-ի հետ միշտ կապի մեջ եք։ Կիպրոսում, ԱՄԷ, Եգիպտոսում, Իտալիայում, Վրաստանում և այլ երկրներում օգտագործեք uTravel ռոումինգ ինտերնետ փաթեթներից մեկը։",
    image: "https://www.ucom.am/storage/files/banner-5-2-1-290x_-quality(75)-webp(80).png?token=826d56d1aa478de7ce5141d4095573df",
    button: "Մանրամասներ",
    type: "half",
  },
  {
    id: 2,
    title: "Ինտերնետ ռոումինգում փաթեթներ",
    text: "Եթե ցանկանում եք արտերկրում լինել Ձեր հասանելի ցանցի տիրույթում, օգտագործեք ինտերնետ ռոումինգում փաթեթներից մեկը։",
    image: "https://www.ucom.am/storage/files/banner-3-2-2-290x_-quality(75)-webp(80).png?token=ed379152fa2e7a1ac7a08ed7b4f38287",
    button: "Մանրամասներ",
    type: "half",
  },
  {
    id: 3,
    title: "Զանգ ռոումինգում",
    text: "Եգիպտոս, Վրաստան, Հունաստան, ԱՄԷ, Կիպրոս, Իտալիա, Հայաստան և այլ երկրներից ելքային և մուտքային զանգեր կապի մեջ մնալու համար։",
    image: "https://www.ucom.am/storage/files/banner-4-1-1-290x_-quality(75)-webp(80).png?token=f581f79c09b3c3fa46dfbf537b2386ce",
    button: "Մանրամասներ",
    type: "full",
  },
];

const TravelInfo = () => {
  return (
    <section className="travel">
      <div className="travel-grid">
        {travelData.map((item) => (
          <div
            key={item.id}
            className={`travel-card ${item.type}`}
          >
            <div className="travel-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button>{item.button}</button>
            </div>

            <div className="travel-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelInfo;
