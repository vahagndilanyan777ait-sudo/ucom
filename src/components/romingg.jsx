import React from "react";

export default function Romingg() {
  return (
    <section className="rounded-[24px] sm:rounded-[32px] bg-[#f6f7f8] px-4 sm:px-6 md:px-12 py-8 sm:py-12">
      <h1 className="mb-6 sm:mb-8 text-center text-[28px] sm:text-[34px] md:text-[40px] font-semibold">
        Ռոումինգ
      </h1>

      {/* Card */}
      <div className="mx-auto w-full max-w-full sm:max-w-[600px] md:max-w-[760px] rounded-[16px] sm:rounded-[20px] bg-white p-4 sm:p-6 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        {/* Tabs */}
        <div className="mb-4 sm:mb-6 flex flex-wrap gap-4 border-b border-gray-200">
          <button className="border-b-[3px] border-[#7ddc00] pb-2 sm:pb-3 text-[14px] sm:text-[16px] font-semibold text-[#111]">
            Ռոումինգ
          </button>
          <button className="pb-2 sm:pb-3 text-[14px] sm:text-[16px] text-gray-500">
            Միջազգային զանգեր
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-end gap-3 sm:gap-4">
          <div className="flex-1 w-full">
            <label className="mb-1 block text-[13px] sm:text-[14px]">
              Երկիր
            </label>
            <select className="w-full rounded-[12px] border border-gray-300 p-3 text-[14px] sm:p-3.5 sm:text-[15px]">
              <option>Նշեք երկիրը</option>
              <option>Վրաստան</option>
              <option>Իտալիա</option>
              <option>ԱՄԷ</option>
            </select>
          </div>

          <button className="w-full sm:w-[120px] rounded-[12px] bg-[#7ddc00] py-3 text-[14px] sm:py-3.5 sm:text-[15px] font-semibold transition hover:opacity-90">
            Որոնել
          </button>
        </div>
      </div>

      {/* Popular countries */}
      <div className="mt-6 sm:mt-8 text-center">
        <span className="text-sm sm:text-base text-gray-700">
          Հաճախ ընտրվող ուղղություններ
        </span>

        <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          <Country name="Կիպրոս" flag="🇨🇾" />
          <Country name="Եգիպտոս" flag="🇪🇬" />
          <Country name="Վրաստան" flag="🇬🇪" />
          <Country name="Իտալիա" flag="🇮🇹" />
          <Country name="ԱՄԷ" flag="🇦🇪" />
        </div>
      </div>
    </section>
  );
}

function Country({ name, flag }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
      <span className="text-[16px] sm:text-[18px]">{flag}</span>
      <span>{name}</span>
    </div>
  );
}
