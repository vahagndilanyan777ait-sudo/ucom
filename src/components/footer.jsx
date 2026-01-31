import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f7] py-12 pb-6 text-[14px] text-[#222]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.6fr]">
          
          
          <div className="bg-white rounded-2xl p-6">
            <h4 className="font-semibold mb-3">Հաճախորդների սպասարկում 24/7</h4>
            <p className="font-bold my-2">☎ 011 444 444, 444</p>
            <p className="mb-3 text-[#555]">
              Ucom ծառայությունների վերաբերյալ հարցերի և աջակցման համար կարող եք դիմել մեզ։
            </p>
            <p className="mb-1">✉ 444@ucom.am</p>
            <p className="mb-1">✉ info@ucom.am</p>
            <button className="mt-3 font-semibold text-[#2fb344]">
              📍 Սպասարկման կենտրոններ
            </button>
          </div>

          
          <div>
            <h4 className="font-semibold mb-3">Ucom ընկերություն</h4>
            <ul className="space-y-2">
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

          
          <div>
            <h4 className="font-semibold mb-3">Օգնություն</h4>
            <ul className="space-y-2">
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

        
          <div>
            <h4 className="font-semibold mb-3">Տեղեկատվություն</h4>
            <ul className="space-y-2">
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

          
          <div>
            <div className="flex gap-3 items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#2fb344] text-white font-bold flex items-center justify-center">
                U!
              </div>
              <div>
                <h4 className="font-semibold">Ucom հավելված</h4>
                <p className="text-sm">Android-ի և iOS-ի համար</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-[72px] h-[72px] border border-[#ccc] rounded-lg flex items-center justify-center font-semibold">
                QR
              </div>
              <div>
                <button className="block mb-2 px-3 py-2 border border-[#ccc] rounded-[10px] bg-white">
                  Google Play
                </button>
                <button className="block px-3 py-2 border border-[#ccc] rounded-[10px] bg-white">
                  App Store
                </button>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              {["f", "in", "x", "yt"].map((s, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      
        <div className="mt-8 pt-4 border-t border-[#ddd] flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-[#666] text-center sm:text-left">
          <span>
            © Հեռահաղորդակցության Ucom ՓԲԸ 2026. Բոլոր իրավունքները պաշտպանված են
          </span>
          <span className="whitespace-nowrap">Developed by STUDIOONE</span>
        </div>
      </div>
    </footer>
  );
}
