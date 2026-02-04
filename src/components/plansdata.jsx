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
    <div className="bg-[#f5f6f7] p-4 sm:p-6 md:p-10 font-sans">
      <h1 className="mb-1 text-[24px] sm:text-[28px] md:text-[34px] font-bold text-center md:text-left">
        Տան ինտերնետ
      </h1>
      <p className="mb-6 sm:mb-8 md:mb-9 text-[#888] text-center md:text-left text-sm sm:text-base">
        Ընտրիր ինտերնետ ըստ քո կարիքների
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-6 justify-center md:justify-start">
        {plansdata.map((plan) => (
          <div
            key={plan.id}
            className="flex w-full sm:w-[300px] md:w-[320px] max-w-full flex-col justify-between rounded-[14px] sm:rounded-[16px] md:rounded-[18px] bg-white shadow-lg h-auto"
          >
            {/* Header */}
            <div className="rounded-t-[14px] sm:rounded-t-[16px] md:rounded-t-[18px] bg-[#7bc400] p-4 sm:p-5 md:p-[18px] text-[18px] sm:text-[19px] md:text-[20px] font-bold text-white">
              {plan.title}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5 md:p-[22px] text-[#333] text-sm sm:text-[15px] md:text-[15px]">
              <p className="mb-2 sm:mb-3">🏠 {plan.speed}</p>
              <p className="mb-2 sm:mb-3">📶 {plan.wifi}</p>
              <p className="mb-2 sm:mb-3">🌐 {plan.tech}</p>
            </div>

            {/* Footer */}
            <div className="border-t border-[#eee] p-4 sm:p-5 md:p-[22px]">
              <div className="mb-3 sm:mb-4 flex items-center justify-between">
                <span className="text-[22px] sm:text-[24px] md:text-[26px] font-bold">
                  {plan.price}
                </span>
                <span className="text-[#999] text-sm sm:text-base">{plan.period}</span>
              </div>

              <button className="w-full rounded-[12px] sm:rounded-[14px] md:rounded-[14px] p-3 sm:p-[14px] text-[14px] sm:text-[15px] md:text-[16px] bg-[#7bc400] text-white font-semibold transition hover:bg-[#6aad00]">
                Միանալ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
