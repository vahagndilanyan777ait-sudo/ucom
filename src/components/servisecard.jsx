
import "./servisecard.css";


export default function ServiceCards() {
return (
<div className="services">
<div className="service-card">
<div className="service-text">
<h2>Տնայինի համար</h2>
<p>Տնային ինտերնետ, թվային հեռուստատեսություն և TV</p>
</div>
<span className="arrow">›</span>
<div className="service-image home" />
</div>


<div className="service-card">
<div className="service-text">
<h2>Անհատների համար</h2>
<p>Փաթեթներ (ինտերնետ, զանգեր և SMS)</p>
</div>
<span className="arrow">›</span>
<div className="service-image mobile" />
</div>
</div>
);
}