import "./MobileIdBanner.css";

export default function MobileIdBanner() {
  return (
    <section className="mobile-id">
      <div className="mobile-id__image">
        <img
          src="https://www.ucom.am/storage/files/mobile-id-web-10-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=8236c8c8938c11d27c891376d51140d9"
          alt="Mobile ID eSIM"
        />
      </div>

      <div className="mobile-id__content">
        <h2>Mobile ID</h2>

        <p>
          Mobile ID ծառայության շնորհիվ կարող եք անցնել նույնականացման և
          ստորագրել փաստաթղթեր էլեկտրոնային եղանակով՝ արագ, անվտանգ և
          հարմար։ Ծառայությունը հասանելի է eSIM տեխնոլոգիայով բոլոր
          համատեղելի սարքերում։
        </p>

        <button className="mobile-id__btn">Միանալ</button>
      </div>
    </section>
  );
}
