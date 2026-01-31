export default function Header() {
  return (
    <header className="w-full border-b border-[#eee] font-sans">
      
      <div className="flex justify-between items-center px-10 py-2 text-sm border-b border-[#eee]">
        <div className="flex gap-5">
          <a
            href="/"
            className="relative font-medium text-black after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:w-full after:h-[2px] after:bg-[#6cc24a]"
          >
            Անհատներ
          </a>
          <a href="/business" className="font-medium text-black">
            Բիզնես
          </a>
        </div>

        <div className="flex items-center gap-5">
          <span className="font-medium">
            <i className="fa-solid fa-phone"></i> 444 | 011 444 444
          </span>
          <a href="#" className="text-black">
            <i className="fa-solid fa-question"></i> Օգնություն
          </a>
          <div className="cursor-pointer">
            <i className="fa-solid fa-globe"></i> Հայ ▾
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-between px-10 py-[18px]">
        
        <a href="/" className="block">
          <img
            src="https://www.ucom.am/images/main_logo.svg"
            alt="Ucom"
            className="h-9"
          />
        </a>

        
        <nav className="flex gap-[30px]">
          <a href="/forHome" className="font-medium text-black hover:text-[#6cc24a]">
            Տան համար ▾
          </a>
          <a href="/sharjkap" className="font-medium text-black hover:text-[#6cc24a]">
            Շարժական կապ ▾
          </a>
          <a href="/roaming" className="font-medium text-black hover:text-[#6cc24a]">
            Ռոումինգ
          </a>
          <a href="#" className="font-medium text-black hover:text-[#6cc24a]">
            5G ցանց
            <span className="ml-1 rounded-md bg-[#6cc24a] px-1.5 py-[2px] text-[11px] text-white">
              նոր
            </span>
          </a>
          <a href="#" className="font-medium text-black hover:text-[#6cc24a]">
            Uplay
            <span className="ml-1 rounded-md bg-[#6cc24a] px-1.5 py-[2px] text-[11px] text-white">
              նոր
            </span>
          </a>
        </nav>

        
        <div className="flex items-center gap-5">
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <button className="flex items-center gap-2 rounded-[10px] bg-[#eaf6d8] px-[18px] py-2 font-semibold hover:bg-[#dff0c1]">
            <i className="fa-solid fa-wallet"></i> Վճարել
          </button>
        </div>
      </div>
    </header>
  );
}
