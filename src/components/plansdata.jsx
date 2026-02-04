export const plansdata = [
  {
    id: 1,
    title: "uNet 7000",
    speed: "150 Մբ/վ տնային ինտերնետ",
    wifi: "Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "7 000 ֏",
    period: "ամսական",
  },
  {
    id: 2,
    title: "uNet 9500",
    speed: "250 Մբ/վ տնային ինտերնետ",
    wifi: "Super Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "9 500 ֏",
    period: "ամսական",
  },
  {
    id: 3,
    title: "uNet 5000 մատչելի",
    speed: "100 Մբ/վ տնային ինտերնետ",
    wifi: "Wi-Fi սարք",
    tech: "FTTH տեխնոլոգիա",
    price: "5 000 ֏",
    period: "ամսական",
  },
];

export default function InternetPlans() {
  return (
    <div className="bg-[#f5f6f7] p-10 font-sans">
      <h1 className="mb-1 text-[34px] font-bold">Տան ինտերնետ</h1>
      <p className="mb-9 text-[#888]">Ընտրիր ինտերնետ ըստ քո կարիքների</p>

      <div className="flex flex-wrap gap-6 md:justify-start justify-center">
        {plansdata.map((plan) => (
          <div
            key={plan.id}
            className="flex w-[320px] max-w-full flex-col justify-between rounded-[18px] bg-white shadow-lg md:w-[320px]"
          >
            {/* Header */}
            <div className="rounded-t-[18px] bg-[#7bc400] p-[18px] text-[20px] font-bold text-white">
              {plan.title}
            </div>

            {/* Body */}
            <div className="p-[22px] text-[#333]">
              <p className="mb-3 text-[15px]">🏠 {plan.speed}</p>
              <p className="mb-3 text-[15px]">📶 {plan.wifi}</p>
              <p className="mb-3 text-[15px]">🌐 {plan.tech}</p>
            </div>

            {/* Footer */}
            <div className="border-t border-[#eee] p-[22px]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[26px] font-bold">{plan.price}</span>
                <span className="text-[#999]">{plan.period}</span>
              </div>

              <button className="w-full rounded-[14px] bg-[#7bc400] p-[14px] text-[16px] text-white transition hover:bg-[#6aad00]">
                Միանալ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
