export default function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Տնայինի համար */}
      <div className="relative flex cursor-pointer items-center justify-between overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[260px]">
          <h2 className="mb-2 text-[28px] font-semibold">Տնայինի համար</h2>
          <p className="text-gray-500">Տնային ինտերնետ, թվային հեռուստատեսություն և TV</p>
        </div>
        <span className="ml-auto mr-4 text-[32px]">›</span>

        <div
          className="absolute bottom-0 right-0 h-[120px] w-[180px] bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.ucom.am/storage/files/unity5000-uplay-335x_-quality(75)-webp(80).png?token=06e2232b1afd4d5a58378de3752dd18e')",
          }}
        />
      </div>

      {/* Անհատների համար */}
      <div className="relative flex cursor-pointer items-center justify-between overflow-hidden rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[260px]">
          <h2 className="mb-2 text-[28px] font-semibold">Անհատների համար</h2>
          <p className="text-gray-500">Փաթեթներ (ինտերնետ, զանգեր և SMS)</p>
        </div>
        <span className="ml-auto mr-4 text-[32px]">›</span>

        <div
          className="absolute bottom-0 right-0 h-[120px] w-[180px] bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.ucom.am/storage/files/anhatneri-hamar-335x_-quality(75)-webp(80).png?token=a7c06cc390ea15ea36bc04f8eea8f0c0')",
          }}
        />
      </div>
    </div>
  );
}
