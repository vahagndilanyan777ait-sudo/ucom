// Footer.jsx
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact */}
          <div className="footer-card">
            <h4>Հաճախորդների սպասարկում 24/7</h4>
            <p className="phone">☎ 011 444 444, 444</p>
            <p className="desc">
              Ucom ծառայությունների վերաբերյալ հարցերի և աջակցման համար կարող եք դիմել մեզ։
            </p>
            <p className="email">✉ 444@ucom.am</p>
            <p className="email">✉ info@ucom.am</p>
            <button className="location-btn">📍 Սպասարկման կենտրոններ</button>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Ucom ընկերություն</h4>
            <ul>
              <li>Ucom-ի մասին</li>
              <li>Ucom-ի թիմը</li>
              <li>Կորպորատիվ կառավարում</li>
              <li>Նորություններ և մամուլ</li>
              <li>Գնումներ</li>
              <li>Աշխատանք</li>
              <li>Հաշվետվություններ</li>
              <li>Գործընկերներ</li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-col">
            <h4>Օգնություն</h4>
            <ul>
              <li>Հաճախ տրվող հարցեր</li>
              <li>Ucom սպասարկման կենտրոններ</li>
              <li>Օգտագործման ձեռնարկներ</li>
              <li>Օգտակար հղումներ</li>
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <h4>Տեղեկատվություն</h4>
            <ul>
              <li>Անվտանգության քաղաքականություն</li>
              <li>Տվյալների պաշտպանություն</li>
              <li>ISO 9001 Սերտիֆիկատ</li>
              <li>ISO 27001 Սերտիֆիկատ</li>
              <li>ISO 37001 Սերտիֆիկատ</li>
              <li>ISO 37301 Սերտիֆիկատ</li>
              <li>Դիմում</li>
            </ul>
          </div>

          {/* App */}
          <div className="footer-col app">
            <div className="app-head">
              <div className="logo">U!</div>
              <div>
                <h4>Ucom հավելված</h4>
                <p>Android-ի և iOS-ի համար</p>
              </div>
            </div>

            <div className="app-row">
              <div className="qr">QR</div>
              <div className="stores">
                <button>Google Play</button>
                <button>App Store</button>
              </div>
            </div>

            <div className="socials">
              <span>f</span>
              <span>in</span>
              <span>x</span>
              <span>yt</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Հեռահաղորդակցության Ucom ՓԲԸ 2026. Բոլոր իրավունքները պաշտպանված են</span>
          <span className="dev">Developed by STUDIOONE</span>
        </div>
      </div>
    </footer>
  );
}


