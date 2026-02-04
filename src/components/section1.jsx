import React from "react";

export default function Section1() {
  const imgs = [
    "https://www.ucom.am/storage/files/iphone-eshop-mobile-arm.png-650x_-quality(75)-webp(80)-o(png).webp?token=ce22c5767459431cc5f8f5ce5fd3893c",
    "https://www.ucom.am/storage/files/honorx7d-arm.png-650x_-quality(75)-webp(80)-o(png).webp?token=c0fa9d36ff4cddff30fddb48ec6559e1",
    "https://www.ucom.am/storage/files/ucoin-web-650x920-arm-1.png-650x_-quality(75)-webp(80)-o(png).webp?token=d7bd44ce8cd1aa89ccc41824e4fc10a5",
    "https://www.ucom.am/storage/files/macbook-pro-eshop-mobile-arm-1.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=d601fbf80e581961cd76b4436b317afa",
  ];

  return (
    <div className="mt-[50px] flex w-full items-center justify-center gap-5">
      {imgs.map((el, i) => (
        <img
          key={i}
          src={el}
          alt="promo"
          className="h-[460px] w-[323px] rounded-[20px] border border-[#ebebeb] object-cover"
        />
      ))}
    </div>
  );
}
