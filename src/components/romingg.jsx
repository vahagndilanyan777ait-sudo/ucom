import React from "react";
import './romingg.css';


export default function romingg() {
  return (
    <section className="roaming">
      <h1 className="title">Ռոումինգ</h1>

      <div className="card">
        <div className="tabs">
          <button className="tab active">Ռոումինգ</button>
          <button className="tab">Միջազգային զանգեր</button>
        </div>

        <div className="form">
          <div className="field">
            <label>Երկիր</label>
            <select>
              <option>Նշեք երկիրը</option>
              <option>Վրաստան</option>
              <option>Իտալիա</option>
              <option>ԱՄԷ</option>
            </select>
          </div>

          <button className="search-btn">Որոնել</button>
        </div>
      </div>

      <div className="popular">
        <span>Հաճախ ընտրվող ուղղություններ</span>
        <div className="countries">
          <Country name="Կիպրոս" flag="🇨🇾" />
          <Country name="Եգիպտոս" flag="🇪🇬" />
          <Country name="Վրաստան" flag="🇬🇪" />
          <Country name="Իտալիա" flag="🇮🇹" />
          <Country name="ԱՄԷ" flag="🇦🇪" />
        </div>
      </div>
    </section>
  );
}

function Country({ name, flag }) {
  return (
    <div className="country">
      <span className="flag">{flag}</span>
      <span>{name}</span>
    </div>
  );
}



