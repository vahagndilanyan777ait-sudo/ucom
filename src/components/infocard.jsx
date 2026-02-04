import { FaUser, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export default function InfoCard() {
  return (
    <div className="w-full rounded-xl bg-[#f6f9ef] p-10 font-sans">
      <h2 className="mb-4 text-[26px] font-bold">
        Բջջային համարի տեղափոխում
      </h2>

      <p className="mb-8 leading-relaxed text-[#555]">
        Դուք դեռ չունեք Ucom-ի, բայց ցանկանում եք փոխել ձեր օպերատորը՝
        ձեր հեռախոսահամարը պահելով։ Պարզապես լրացրեք անհրաժեշտ տվյալները ստորև,
        միացեք Ucom-ին։
      </p>

      <div className="mb-4 flex items-center gap-4 text-[16px]">
        <FaUser className="text-[20px]" />
        <span>Տեղափոխվող համարի բաժանորդն անձամբ է</span>
      </div>

      <div className="mb-4 flex items-center gap-4 text-[16px]">
        <FaFileAlt className="text-[20px]" />
        <span>Համարը Ucom-ին ցանց տեղափոխելու հայտ է</span>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <button className="rounded-[10px] bg-[#7ac70c] px-7 py-3 text-[16px] text-white transition hover:bg-[#6ab000]">
          Սկսել
        </button>

        <div className="flex cursor-pointer items-center gap-2 text-[#555]">
          <FaInfoCircle />
          <span>Ավելին</span>
        </div>
      </div>
    </div>
  );
}
