export default function PatetCard({
  name,
  internet,
  rope,
  sms,
  aliq,
  gin,
}) {
  return (
    <div className="flex flex-col items-center rounded-[12px] sm:rounded-[15px] border border-gray-400 transition hover:border-green-400
                    w-full sm:w-[280px] md:w-[300px] lg:w-[318px] h-auto">
      
      {/* Header */}
      <div className="flex h-[50px] sm:h-[55px] lg:h-[60px] w-full items-center rounded-t-[12px] sm:rounded-t-[15px] bg-[#7ebc0a] pl-3 text-[13px] sm:text-[15px] font-bold text-white">
        {name}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-4 sm:p-[5%] text-[13px] sm:text-sm md:text-[15px]">
        <p>{internet}</p>
        <p>{rope}</p>
        <p>{sms}</p>
        <p>{aliq}</p>
      </div>

      {/* Price */}
      <div className="mt-auto flex w-full items-center justify-around pb-3 sm:pb-4 text-[18px] sm:text-lg md:text-xl font-bold">
        {gin}
      </div>

      {/* Button */}
      <button className="mb-4 flex h-[50px] sm:h-[55px] lg:h-[60px] w-[90%] sm:w-[90%] md:w-[85%] items-center justify-center rounded-[12px] sm:rounded-[15px] bg-[#7ebc0a] text-[13px] sm:text-[15px] md:text-[16px] font-bold text-black transition hover:bg-green-400">
        Միանալ
      </button>
    </div>
  );
}
