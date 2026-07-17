// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";

// Helpers
import { formatDate } from "../../../utils/date";

function MatchCard({ match }) {
  const { homeTeam, awayTeam, stadium, date } = match;

  const isHomeWinner = homeTeam.result > awayTeam.result;
  const isAwayWinner = awayTeam.result > homeTeam.result;

  const formattedDate = formatDate(date);

  return (
    <div className="card card-match">
      <div className="card-body card-match__body">
        <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${homeTeam.flag}`} aria-hidden="true"></i>
              <span className={isHomeWinner ? "card-match__team-winner" : ""}>
                {homeTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              {homeTeam.result ?? "-"}
            </div>
          </li>

          <li className="list-group-item card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${awayTeam.flag}`} aria-hidden="true"></i>
              <span className={isAwayWinner ? "card-match__team-winner" : ""}>
                {awayTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              {awayTeam.result ?? "-"}
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
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
