export default function MobileIdBanner() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-[60px] p-6 sm:p-10 lg:p-[60px] max-w-[1200px]">
      {/* Image */}
      <div className="w-full lg:w-[520px] flex-shrink-0">
        <img
          src="https://www.ucom.am/storage/files/mobile-id-web-10-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=8236c8c8938c11d27c891376d51140d9"
          alt="Mobile ID eSIM"
          className="w-full rounded-[14px] sm:rounded-[16px] lg:rounded-[20px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full max-w-full lg:max-w-[420px] text-center lg:text-left">
        <h2 className="mb-4 sm:mb-5 text-[28px] sm:text-[32px] lg:text-[40px] font-bold">
          Mobile ID
        </h2>

        <p className="mb-6 sm:mb-8 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.7] text-[#444]">
          Mobile ID ծառայության շնորհիվ կարող եք անցնել նույնականացման և
          ստորագրել փաստաթղթեր էլեկտրոնային եղանակով՝ արագ, անվտանգ և
          հարմար։ Ծառայությունը հասանելի է eSIM տեխնոլոգիայով բոլոր
          համատեղելի սարքերում։
        </p>

        <button className="rounded-[12px] sm:rounded-[14px] bg-[#7cff00] px-6 sm:px-8 py-2.5 sm:py-3.5 text-[14px] sm:text-[16px] font-medium text-black transition hover:bg-[#6ae000]">
          Միանալ
        </button>
      </div>
    </section>
  );
}
