import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUsers,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";

function StadiumCard({ stadium }) {
  const { imageUrl, name, location, capacity, matches } = stadium;

  return (
    <article className="card-stadium">
      <div className="card-stadium__image">
        <img
          src={imageUrl}
          loading="lazy"
          alt={`Photo of ${name}`}
          className="img-fluid card-stadium__image-img"
        />
      </div>

      <div className="card card-stadium__card">
        <div className="card-body card-stadium__card-body">
          <h3 className="card-stadium__card-title">
            {name}
          </h3>

          <ul className="list-group list-group-light list-group-small card-stadium__list">
            <li className="list-group-item card-stadium__item">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="card-stadium__icon"
                aria-label="Location:"
              />

              <span className="card-stadium__text">
                {location}
              </span>
            </li>

            <li className="list-group-item card-stadium__item">
                <FontAwesomeIcon
                icon={faUsers}
                className="card-stadium__icon"
                aria-label="Capacity:"
              />

              <span className="card-stadium__text">
                {`${capacity} spectators`}
              </span>
            </li>

            <li className="list-group-item card-stadium__item">
              <FontAwesomeIcon
                icon={faFutbol}
                className="card-stadium__icon"
                aria-label="Matches hosted:"
              />

              <span className="card-stadium__text">
                {`${matches} matches`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default StadiumCard;
