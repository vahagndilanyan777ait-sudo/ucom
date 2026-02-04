import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f7] py-8 md:py-12 text-[14px] text-[#222]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.6fr]">
          
          {/* Customer Service */}
          <div className="bg-white rounded-2xl p-4 sm:p-6">
            <h4 className="font-semibold mb-2 sm:mb-3">Հաճախորդների սպասարկում 24/7</h4>
            <p className="font-bold my-1 sm:my-2">☎ 011 444 444, 444</p>
            <p className="mb-2 sm:mb-3 text-[#555] text-sm sm:text-[14px]">
              Ucom ծառայությունների վերաբերյալ հարցերի և աջակցման համար կարող եք դիմել մեզ։
            </p>
            <p className="mb-1 text-sm sm:text-[14px]">✉ 444@ucom.am</p>
            <p className="mb-1 text-sm sm:text-[14px]">✉ info@ucom.am</p>
            <button className="mt-2 sm:mt-3 font-semibold text-[#2fb344] text-sm sm:text-[14px]">
              📍 Սպասարկման կենտրոններ
            </button>
          </div>

          {/* Ucom Company */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3">Ucom ընկերություն</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-[14px]">
              {[
                "Ucom-ի մասին",
                "Ucom-ի թիմը",
                "Կորպորատիվ կառավարում",
                "Նորություններ և մամուլ",
                "Գնումներ",
                "Աշխատանք",
                "Հաշվետվություններ",
                "Գործընկերներ",
              ].map((item, i) => (
                <li key={i} className="text-[#444] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3">Օգնություն</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-[14px]">
              {[
                "Հաճախ տրվող հարցեր",
                "Ucom սպասարկման կենտրոններ",
                "Օգտագործման ձեռնարկներ",
                "Օգտակար հղումներ",
              ].map((item, i) => (
                <li key={i} className="text-[#444] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3">Տեղեկատվություն</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-[14px]">
              {[
                "Անվտանգության քաղաքականություն",
                "Տվյալների պաշտպանություն",
                "ISO 9001 Սերտիֆիկատ",
                "ISO 27001 Սերտիֆիկատ",
                "ISO 37001 Սերտիֆիկատ",
                "ISO 37301 Սերտիֆիկատ",
                "Դիմում",
              ].map((item, i) => (
                <li key={i} className="text-[#444] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* App & Social */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex gap-2 sm:gap-3 items-center mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#2fb344] text-white font-bold flex items-center justify-center">
                U!
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-[14px]">Ucom հավելված</h4>
                <p className="text-xs sm:text-sm">Android-ի և iOS-ի համար</p>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 items-center">
              <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] border border-[#ccc] rounded-lg flex items-center justify-center font-semibold">
                QR
              </div>
              <div className="flex flex-col gap-1">
                <button className="block px-2 py-1 sm:px-3 sm:py-2 border border-[#ccc] rounded-[10px] bg-white text-xs sm:text-sm">
                  Google Play
                </button>
                <button className="block px-2 py-1 sm:px-3 sm:py-2 border border-[#ccc] rounded-[10px] bg-white text-xs sm:text-sm">
                  App Store
                </button>
              </div>
            </div>

            <div className="mt-2 sm:mt-4 flex gap-2 sm:gap-3">
              {["f", "in", "x", "yt"].map((s, i) => (
                <span
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#ccc] flex items-center justify-center cursor-pointer text-xs sm:text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 md:mt-8 pt-2 md:pt-4 border-t border-[#ddd] flex flex-col sm:flex-row justify-between gap-1 sm:gap-2 text-[12px] sm:text-[13px] text-[#666] text-center sm:text-left">
          <span>
            © Հեռահաղորդակցության Ucom ՓԲԸ 2026. Բոլոր իրավունքները պաշտպանված են
          </span>
          <span className="whitespace-nowrap">Developed by STUDIOONE</span>
        </div>
      </div>
    </footer>
  );
}
