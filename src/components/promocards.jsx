import "./promocards.css";

export const promodata = [
  {
    id: 1,
    title: "uNet մատչելի 3000 փաթեթ",
    description:
      "Հարմար տարբերակ նոր միացումների համար։ Գործում է սահմանափակ ժամանակով՝ Ucom-ի ֆիքսված ցանցի բաժանորդների համար։",
    buttonText: "Մանրամասներ",
    image: "https://www.ucom.am/storage/files/unet-1-290x_-quality(75)-webp(80).png?token=b373b7a1d9ed25a3069d4bb7bdc0ac4c"
  },
  {
    id: 2,
    title: "Փոփոխություններ որոշ սակագների փաթեթներում",
    description:
      "2024թ․ մայիսի 1-ից Ucom-ի որոշ սակագնային փաթեթներում տեղի են ունեցել փոփոխություններ՝ uNet XS, uMix 6000 promo, 3Play Select, uMix S, 3Play Classic, uMix M և այլն։",
    buttonText: "Մանրամասներ",
    image: "https://www.ucom.am/storage/files/tariff-changes-1-290x_-quality(75)-webp(80).png?token=bf5694a27e5a954e0247774118af493a"
  }
];




export default function PromoCards() {
  return (
    <div className="promo-wrapper">
      {promodata.map(item => (
        <div className="promo-card" key={item.id}>
          <div className="promo-text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>

          <div className="promo-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
