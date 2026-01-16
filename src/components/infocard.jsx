
import "./InfoCard.css";
import { FaUser, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export default function InfoCard() {
  return (
    <div className="card">
      <h2 className="card-title">Բջջային համարի տեղափոխում</h2>

      <p className="card-desc">
        Դուք դեռ չունեք Ucom-ի, բայց ցանկանում եք փոխել ձեր օպերատորը՝
        ձեր հեռախոսահամարը պահելով։ Պարզապես լրացրեք անհրաժեշտ տվյալները ստորև,
        միացեք Ucom-ին։
      </p>

      <div className="card-item">
        <FaUser className="icon" />
        <span>Տեղափոխվող համարի բաժանորդն անձամբ է</span>
      </div>

      <div className="card-item">
        <FaFileAlt className="icon" />
        <span>Համարը Ucom-ին ցանց տեղափոխելու հայտ է</span>
      </div>

      <div className="card-actions">
        <button className="btn-primary">Սկսել</button>

        <div className="info">
          <FaInfoCircle />
          <span>Ավելին</span>
        </div>
      </div>
    </div>
  );
}
