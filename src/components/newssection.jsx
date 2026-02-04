export default function NewsSection() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold">
          Նորություններ
        </h2>
        <a
          href="#"
          className="font-semibold text-[#111] hover:underline text-sm sm:text-base"
        >
          Տեսնել բոլորը ›
        </a>
      </div>

      {/* News Cards Grid */}
      <div className="grid gap-4 sm:gap-6 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <NewsCard
          image="https://www.ucom.am/storage/files/hecttor-01.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=18f9396558588cc7963ef516e89770b7"
          date="Հունվար 13, 2026"
          title="Ucom-ը ներդնում է Hector AI-ը՝ բաժանորդների հարցերի ավտոմատացման համար"
        />
        <NewsCard
          image="https://www.ucom.am/storage/files/tigran-mets-900x600.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=ecf173a1d002a0b4118d575d6ad4011c"
          date="Դեկտեմբեր 26, 2025"
          title="Վերագործարկվեց Ucom-ի կամուրջն ու սպասարկման կենտրոնը Շիրակի մարզում"
        />
        <NewsCard
          image="https://www.ucom.am/storage/files/untitled-1_1.png-880x_-quality(75)-webp(80)-o(png).webp?token=f19cc9ca431f73ce4ce45f3a882fe752"
          date="Դեկտեմբեր 19, 2025"
          title="Ucom-ի աջակցությամբ «Արձունք» ՀԿ-ն իրականացնում է «Երիտասարդ բնապահպաններ» կրթական ծրագիրը"
        />
      </div>
    </section>
  );
}

function NewsCard({ image, date, title }) {
  return (
    <div className="cursor-pointer">
      <img
        src={image}
        alt="news"
        className="mb-2 sm:mb-3 h-[180px] sm:h-[200px] md:h-[220px] w-full rounded-2xl object-cover"
      />

      <div>
        <span className="mb-1 sm:mb-2 block text-xs sm:text-sm text-gray-500">
          {date}
        </span>
        <h3 className="text-[16px] sm:text-[17px] md:text-[18px] leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}
