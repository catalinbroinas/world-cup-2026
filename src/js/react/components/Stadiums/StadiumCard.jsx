import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUsers,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";

import akronImg from "../../../../assets/images/stadiums/akron.webp";

function StadiumCard() {
  return (
    <div className="card-stadium">
      <div className="card-stadium__image">
        <img
          src={akronImg}
          alt="Akron stadium"
          className="img-fluid card-stadium__image-img"
        />
      </div>

      <div className="card card-stadium__card">
        <div className="card-body card-stadium__card-body">
          <h3 className="card-stadium__card-title">
            Estadio Akron
          </h3>

          <ul className="list-group list-group-light list-group-small card-stadium__list">
            <li className="list-group-item card-stadium__item">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="card-stadium__icon"
              />
              <span className="card-stadium__text">
                Guadalajara, Mexico
              </span>
            </li>

            <li className="list-group-item card-stadium__item">
                <FontAwesomeIcon
                icon={faUsers}
                className="card-stadium__icon"
              />
              <span className="card-stadium__text">
                45.664
              </span>
            </li>

            <li className="list-group-item card-stadium__item">
              <FontAwesomeIcon
                icon={faFutbol}
                className="card-stadium__icon"
              />
              <span className="card-stadium__text">
                4
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StadiumCard;
