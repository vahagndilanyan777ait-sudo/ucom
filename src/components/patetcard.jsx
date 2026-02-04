export default function PatetCard({
  name,
  internet,
  rope,
  sms,
  aliq,
  gin,
}) {
  return (
    <div className="flex h-[470px] w-[318px] flex-col items-center rounded-[15px] border border-gray-400 transition hover:border-green-400">
      
      {/* Header */}
      <div className="flex h-[60px] w-full items-center rounded-t-[15px] bg-[#7ebc0a] pl-3 text-[15px] font-bold text-white">
        {name}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-[5%] text-sm">
        <p>{internet}</p>
        <p>{rope}</p>
        <p>{sms}</p>
        <p>{aliq}</p>
      </div>

      {/* Price */}
      <div className="mt-auto flex w-full items-center justify-around pb-4 text-lg font-bold">
        {gin}
      </div>

      {/* Button */}
      <button className="mb-4 flex h-[60px] w-[90%] items-center justify-center rounded-[15px] bg-[#7ebc0a] text-[15px] font-bold text-black transition hover:bg-green-400">
        Միանալ
      </button>
    </div>
  );
}
