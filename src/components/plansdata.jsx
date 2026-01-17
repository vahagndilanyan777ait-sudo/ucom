import './plansdata.css'


export const plansdata = [
  {
    id: 1,
    title: "uNet 7000",
    speed: "150 Մբ/վ տնային ինտերնետ",
    wifi: "Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "7 000 ֏",
    period: "ամսական"
  },
  {
    id: 2,
    title: "uNet 9500",
    speed: "250 Մբ/վ տնային ինտերնետ",
    wifi: "Super Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "9 500 ֏",
    period: "ամսական"
  },
  {
    id: 3,
    title: "uNet 5000 մատչելի",
    speed: "100 Մբ/վ տնային ինտերնետ",
    wifi: "Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "5 000 ֏",
    period: "ամսական"
  }
];




export default function InternetPlans() {
  return (
    <div className="plans-wrapper">
      <h1 className="plans-title">Տան ինտերնետ</h1>
      <p className="plans-subtitle">Ընտրիր ինտերնետ ըստ քո կարիքների</p>

      <div className="plans-cards">
        {plansdata.map(plan => (
          <div className="plan-card" key={plan.id}>
            <div className="plan-header">{plan.title}</div>

            <div className="plan-body">
              <p>🏠 {plan.speed}</p>
              <p>📶 {plan.wifi}</p>
              <p>🌐 {plan.tech}</p>
            </div>

            <div className="plan-footer">
              <div className="price-block">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <button className="connect-btn">Միանալ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
