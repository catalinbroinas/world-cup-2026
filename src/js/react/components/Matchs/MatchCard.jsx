import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";

function MatchCard({ match }) {
  const { homeTeam, awayTeam, stadium, date } = match;

  const isHomeWinner = homeTeam.result > awayTeam.result;
  const isAwayWinner = awayTeam.result > homeTeam.result;

  return (
    <div className="card card-match">
      <div className="card-body card-match__body">
        <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${homeTeam.flag}`}></i>
              <span className={isHomeWinner ? "card-match__team-winner" : ""}>
                {homeTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              <strong>{homeTeam.result ?? "-"}</strong>
            </div>
          </li>

          <li className="list-group-item card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${awayTeam.flag}`}></i>
              <span className={isAwayWinner ? "card-match__team-winner" : ""}>
                {awayTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              <strong>{awayTeam.result ?? "-"}</strong>
            </div>
          </li>
        </ul>
      </div>

      <div className="card-footer card-match__footer">
        <div className="card-match__meta">
          <FontAwesomeIcon icon={faLocationDot} />
          {stadium}
        </div>

        <div className="card-match__meta">
          <FontAwesomeIcon icon={faCalendarDay} />
          {date}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
