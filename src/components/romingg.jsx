import React from "react";

export default function Romingg() {
  return (
    <section className="rounded-[32px] bg-[#f6f7f8] px-6 py-12">
      <h1 className="mb-8 text-center text-[40px] font-semibold">
        Ռոումինգ
      </h1>

      {/* Card */}
      <div className="mx-auto max-w-[760px] rounded-[20px] bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        {/* Tabs */}
        <div className="mb-6 flex gap-6 border-b border-gray-200">
          <button className="border-b-[3px] border-[#7ddc00] pb-3 text-[16px] font-semibold text-[#111]">
            Ռոումինգ
          </button>
          <button className="pb-3 text-[16px] text-gray-500">
            Միջազգային զանգեր
          </button>
        </div>

        {/* Form */}
        <div className="flex items-end gap-4">
          <div className="w-[90%] flex-1">
            <label className="mb-1 block text-[14px]">
              Երկիր
            </label>
            <select className="w-full rounded-[12px] border border-gray-300 p-3.5 text-[15px]">
              <option>Նշեք երկիրը</option>
              <option>Վրաստան</option>
              <option>Իտալիա</option>
              <option>ԱՄԷ</option>
            </select>
          </div>

          <button className="w-[20%] rounded-[12px] bg-[#7ddc00] py-3.5 text-[15px] font-semibold transition hover:opacity-90">
            Որոնել
          </button>
        </div>
      </div>

      {/* Popular countries */}
      <div className="mt-8 text-center">
        <span className="text-sm text-gray-700">
          Հաճախ ընտրվող ուղղություններ
        </span>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
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
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
      <span className="text-[18px]">{flag}</span>
      <span>{name}</span>
    </div>
  );
}
