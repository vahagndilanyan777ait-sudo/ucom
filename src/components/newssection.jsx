import "./newssection.css";


export default function NewsSection() {
return (
<section className="news">
<div className="news-header">
<h2>Նորություններ</h2>
<a href="#" className="all-link">Տեսնել բոլորը ›</a>
</div>


<div className="news-grid">
<NewsCard
image="https://www.ucom.am/storage/files/hecttor-01.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=18f9396558588cc7963ef516e89770b7"
date="Հունվար 13, 2026"
title="Ucom-ը ներդնում է Hector AI-ը՝ բաժանորդների հարցերի ավտոմատացման համար"
/>
<NewsCard
image="https://www.ucom.am/storage/files/tigran-mets-900x600.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=ecf173a1d002a0b4118d575d6ad4011c"
date="Դեկտեմբեր 26, 2025"
title="Վերագործարկվեց Ucom-ի կամուրջն ու սպասարկման կենտրոնը Շիրակի մարզում"
/>
<NewsCard
image="https://www.ucom.am/storage/files/untitled-1_1.png-880x_-quality(75)-webp(80)-o(png).webp?token=f19cc9ca431f73ce4ce45f3a882fe752"
date="Դեկտեմբեր 19, 2025"
title="Ucom-ի աջակցությամբ «Արձունք» ՀԿ-ն իրականացնում է «Երիտասարդ բնապահպաններ» կրթական ծրագիրը"
/>
</div>
</section>
);
}


function NewsCard({ image, date, title }) {
return (
<div className="news-card">
<img src={image} alt="news" />
<div className="news-content">
<span className="date">{date}</span>
<h3>{title}</h3>
</div>
</div>
);
}