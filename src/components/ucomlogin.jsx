
import "./ucomlogin.css";


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
                        <div className="app-item">
                            <img className="icon" src="https://www.ucom.am/storage/files/rectangle-513-1-48x_-quality(75)-webp(80).png?token=23649e93ba54ee148b059dbedf9e2efe" />
                            <span>Ucom </span>
                        </div>
                        <div className="app-item">
                            <img className="icon" src="https://www.ucom.am/storage/files/285x285-48x_-quality(75)-webp(80).png?token=5e834fd78f91e64b19f4e20a77b2d3de" />
                            <span>Uplay</span>
                        </div>
                        <div className="app-item">
                            <img className="icon"  src="https://www.ucom.am/storage/files/new-upay.svg" />
                            <span>UPay</span>
                        </div>
                        <div className="app-item">
                            <img className="icon" src="https://www.ucom.am/storage/files/ukid_1.svg" />
                            <span>uKid</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}