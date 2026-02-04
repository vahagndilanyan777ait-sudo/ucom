import React from "react";

export default function UcomLogin() {
  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg p-5 md:p-0">
      <div className="flex flex-col gap-5 md:flex-row w-full">
        {/* Card 1 */}
        <div className="flex flex-col bg-white rounded-lg p-6 md:p-8 flex-1">
          <h1 className="text-xl font-bold mb-2">Լիցքավորեք Ձեր հաշվին առանց</h1>
          <p className="text-gray-600 mb-4">
            Մուտքագրեք Ձեր Ucom շարժական կամ ֆիքսված ծառայությունների համարը
          </p>

          <label className="mb-2 block font-semibold">Հեռախոսահամար / ID</label>
          <div className="flex mb-4">
            <div className="flex items-center justify-center bg-gray-100 px-4 rounded-l-md border border-r-0 border-gray-300">
              +374
            </div>
            <input
              placeholder="XX XXX XXX"
              className="flex-1 rounded-r-md border border-gray-300 px-4 py-2 outline-none"
            />
          </div>

          <button className="mt-4 w-full rounded-xl border border-green-500 bg-white py-3 font-bold text-green-500 hover:bg-green-50 transition">
            Վճարել
          </button>

          <div className="flex gap-4 mt-5">
            <span className="font-bold text-blue-700">VISA</span>
            <span className="font-bold text-pink-600">Mastercard</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white rounded-lg p-6 md:p-8 flex-1">
          <h2 className="text-xl font-bold mb-2">Ucom հավելվածներ</h2>
          <p className="text-gray-600 mb-4">
            Բացահայտեք հարմարավետության նոր մակարդակ մեր թվային լուծումների միջոցով
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-16 w-16 rounded-lg bg-gray-100 p-2"
                src="https://www.ucom.am/storage/files/rectangle-513-1-48x_-quality(75)-webp(80).png?token=23649e93ba54ee148b059dbedf9e2efe"
              />
              <span>Ucom</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                className="h-16 w-16 rounded-lg bg-gray-100 p-2"
                src="https://www.ucom.am/storage/files/285x285-48x_-quality(75)-webp(80).png?token=5e834fd78f91e64b19f4e20a77b2d3de"
              />
              <span>Uplay</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                className="h-16 w-16 rounded-lg bg-gray-100 p-2"
                src="https://www.ucom.am/storage/files/new-upay.svg"
              />
              <span>UPay</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                className="h-16 w-16 rounded-lg bg-gray-100 p-2"
                src="https://www.ucom.am/storage/files/ukid_1.svg"
              />
              <span>uKid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
