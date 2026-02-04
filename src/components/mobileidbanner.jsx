export default function MobileIdBanner() {
  return (
    <section className="mx-auto flex max-w-[1200px] items-center gap-[60px] p-[60px]">
      <div>
        <img
          src="https://www.ucom.am/storage/files/mobile-id-web-10-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=8236c8c8938c11d27c891376d51140d9"
          alt="Mobile ID eSIM"
          className="w-[520px] rounded-[20px]"
        />
      </div>

      <div className="max-w-[420px]">
        <h2 className="mb-5 text-[40px] font-bold">
          Mobile ID
        </h2>

        <p className="mb-8 text-[16px] leading-[1.7] text-[#444]">
          Mobile ID ծառայության շնորհիվ կարող եք անցնել նույնականացման և
          ստորագրել փաստաթղթեր էլեկտրոնային եղանակով՝ արագ, անվտանգ և
          հարմար։ Ծառայությունը հասանելի է eSIM տեխնոլոգիայով բոլոր
          համատեղելի սարքերում։
        </p>

        <button className="rounded-[14px] bg-[#7cff00] px-8 py-3.5 text-[16px] font-medium text-black transition hover:bg-[#6ae000]">
          Միանալ
        </button>
      </div>
    </section>
  );
}
