export default function Header() {
  return (
    <header className="w-full border-b border-[#eee] font-sans">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-2 text-sm border-b border-[#eee] gap-2 sm:gap-0">
        <div className="flex gap-3 sm:gap-5 text-xs sm:text-sm">
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

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5 text-xs sm:text-sm">
          <span className="font-medium flex items-center gap-1">
            <i className="fa-solid fa-phone"></i> 444 | 011 444 444
          </span>
          <a href="#" className="text-black flex items-center gap-1">
            <i className="fa-solid fa-question"></i> Օգնություն
          </a>
          <div className="cursor-pointer flex items-center gap-1">
            <i className="fa-solid fa-globe"></i> Հայ ▾
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-3 md:py-[18px] gap-3 md:gap-0">
        {/* Logo */}
        <a href="/" className="block">
          <img
            src="https://www.ucom.am/images/main_logo.svg"
            alt="Ucom"
            className="h-8 sm:h-9"
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap md:flex-nowrap gap-2 md:gap-[30px] justify-center md:justify-start text-sm">
          <a href="/forHome" className="font-medium text-black hover:text-[#6cc24a] whitespace-nowrap">
            Տան համար ▾
          </a>
          <a href="/sharjkap" className="font-medium text-black hover:text-[#6cc24a] whitespace-nowrap">
            Շարժական կապ ▾
          </a>
          <a href="/roaming" className="font-medium text-black hover:text-[#6cc24a] whitespace-nowrap">
            Ռոումինգ
          </a>
          <a href="#" className="font-medium text-black hover:text-[#6cc24a] whitespace-nowrap flex items-center gap-1">
            5G ցանց
            <span className="rounded-md bg-[#6cc24a] px-1 py-[1px] text-[10px] text-white">
              նոր
            </span>
          </a>
          <a href="#" className="font-medium text-black hover:text-[#6cc24a] whitespace-nowrap flex items-center gap-1">
            Uplay
            <span className="rounded-md bg-[#6cc24a] px-1 py-[1px] text-[10px] text-white">
              նոր
            </span>
          </a>
        </nav>

        {/* Icons and Button */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-5">
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <button className="flex items-center gap-1 sm:gap-2 rounded-[10px] bg-[#eaf6d8] px-4 sm:px-[18px] py-1.5 sm:py-2 font-semibold hover:bg-[#dff0c1] text-sm sm:text-base">
            <i className="fa-solid fa-wallet"></i> Վճարել
          </button>
        </div>
      </div>
    </header>
  );
}
