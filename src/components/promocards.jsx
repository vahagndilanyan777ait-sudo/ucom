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
    <div className="flex flex-col gap-6 bg-[#f6f7f7] p-10 lg:flex-row">
      {promodata.map((item) => (
        <div
          key={item.id}
          className="flex flex-1 items-center justify-between rounded-[24px] bg-white p-8 lg:flex-row flex-col text-center lg:text-left"
        >
          {/* Text */}
          <div className="mb-6 max-w-full lg:mb-0 lg:max-w-[55%]">
            <h2 className="mb-4 text-[26px] font-semibold">
              {item.title}
            </h2>

            <p className="mb-6 leading-relaxed text-[#666]">
              {item.description}
            </p>

            <button className="rounded-[14px] border-2 border-[#7bc400] px-6 py-3 text-[15px] transition hover:bg-[#7bc400] hover:text-white">
              {item.buttonText}
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto max-w-[260px] lg:mx-0 lg:ml-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
