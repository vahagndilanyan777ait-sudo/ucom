
import "./UcomLogin.css";


export default function UcomLogin() {
return (
<div className="page">
<div className="container">
<div className="card">
<h1>Լիցքավորեք Ձեր հաշվին առանց</h1>
<p className="subtitle">
Մուտքագրեք Ձեր Ucom շարժական կամ ֆիքսված ծառայությունների համարը
</p>


<label className="label">Հեռախոսահամար / ID</label>
<div className="phone-row">
<div className="code">+374</div>
<input placeholder="XX XXX XXX" />
</div>


<button className="pay-btn">Վճարել</button>


<div className="cards">
<span className="visa">VISA</span>
<span className="mc">Mastercard</span>
</div>
</div>



<div className="card">
<h2>Ucom հավելվածներ</h2>
<p className="subtitle">
Բացահայտեք հարմարավետության նոր մակարդակ մեր թվային լուծումների միջոցով
</p>


<div className="apps">
<AppItem title="Ucom" />
<AppItem title="Uplay" />
<AppItem title="UPay" />
<AppItem title="uKid" />
</div>
</div>
</div>
</div>
);
}


function AppItem({ title }) {
return (
<div className="app-item">
<div className="icon">{title[0]}</div>
<span>{title}</span>
</div>
);
}