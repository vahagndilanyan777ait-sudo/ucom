export const promodata = [
  {
    id: 1,
    title: "uNet մատչելի 3000 փաթեթ",
    description:
      "Հարմար տարբերակ նոր միացումների համար։ Գործում է սահմանափակ ժամանակով՝ Ucom-ի ֆիքսված ցանցի բաժանորդների համար։",
    buttonText: "Մանրամասներ",
    image:
      "https://www.ucom.am/storage/files/unet-1-290x_-quality(75)-webp(80).png?token=b373b7a1d9ed25a3069d4bb7bdc0ac4c",
  },
  {
    id: 2,
    title: "Փոփոխություններ որոշ սակագների փաթեթներում",
    description:
      "2024թ․ մայիսի 1-ից Ucom-ի որոշ սակագնային փաթեթներում տեղի են ունեցել փոփոխություններ՝ uNet XS, uMix 6000 promo, 3Play Select, uMix S, 3Play Classic, uMix M և այլն։",
    buttonText: "Մանրամասներ",
    image:
      "https://www.ucom.am/storage/files/tariff-changes-1-290x_-quality(75)-webp(80).png?token=bf5694a27e5a954e0247774118af493a",
  },
];

export default function PromoCards() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 bg-[#f6f7f7] p-4 sm:p-6 md:p-10">
      {promodata.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row items-center justify-between rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] bg-white p-4 sm:p-6 md:p-8 text-center lg:text-left"
        >
          {/* Text */}
          <div className="mb-4 sm:mb-6 lg:mb-0 max-w-full lg:max-w-[55%]">
            <h2 className="mb-2 sm:mb-3 md:mb-4 text-[20px] sm:text-[22px] md:text-[26px] font-semibold">
              {item.title}
            </h2>

            <p className="mb-4 sm:mb-5 md:mb-6 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-[#666]">
              {item.description}
            </p>

            <button className="rounded-[12px] sm:rounded-[14px] md:rounded-[14px] border-2 border-[#7bc400] px-4 sm:px-6 md:px-6 py-2 sm:py-3 md:py-3 text-[13px] sm:text-[14px] md:text-[15px] transition hover:bg-[#7bc400] hover:text-white">
              {item.buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:mx-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
