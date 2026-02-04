import { FaUser, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export default function InfoCard() {
  return (
    <div className="w-full rounded-xl bg-[#f6f9ef] p-5 sm:p-8 md:p-10 font-sans">
      {/* Title */}
      <h2 className="mb-3 sm:mb-4 text-[20px] sm:text-[24px] md:text-[26px] font-bold">
        Բջջային համարի տեղափոխում
      </h2>

      {/* Description */}
      <p className="mb-6 sm:mb-8 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-[#555]">
        Դուք դեռ չունեք Ucom-ի, բայց ցանկանում եք փոխել ձեր օպերատորը՝
        ձեր հեռախոսահամարը պահելով։ Պարզապես լրացրեք անհրաժեշտ տվյալները ստորև,
        միացեք Ucom-ին։
      </p>

      {/* Info items */}
      <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px]">
        <FaUser className="text-[16px] sm:text-[18px] md:text-[20px]" />
        <span>Տեղափոխվող համարի բաժանորդն անձամբ է</span>
      </div>

      <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[16px]">
        <FaFileAlt className="text-[16px] sm:text-[18px] md:text-[20px]" />
        <span>Համարը Ucom-ին ցանց տեղափոխելու հայտ է</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <button className="rounded-[10px] bg-[#7ac70c] px-5 sm:px-6 md:px-7 py-2 sm:py-3 text-[14px] sm:text-[15px] md:text-[16px] text-white transition hover:bg-[#6ab000]">
          Սկսել
        </button>

        <div className="flex cursor-pointer items-center gap-2 text-[14px] sm:text-[15px] md:text-[16px] text-[#555]">
          <FaInfoCircle />
          <span>Ավելին</span>
        </div>
      </div>
    </div>
  );
}
