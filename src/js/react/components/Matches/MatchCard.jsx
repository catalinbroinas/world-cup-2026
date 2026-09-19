// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";

// Helpers
import { formatDate } from "../../../utils/date";

function MatchCard({ match }) {
  const {
    homeTeam,
    awayTeam,
    stadium,
    date,
    extraTime,
    penalties,
  } = match;

  const homeScore = extraTime?.homeResult ?? homeTeam.result;
  const awayScore = extraTime?.awayResult ?? awayTeam.result;

  const homePenalty = penalties?.homeResult;
  const awayPenalty = penalties?.awayResult;

  const homeResult = homePenalty ?? homeScore;
  const awayResult = awayPenalty ?? awayScore;

  const homeResultText = homePenalty != null
    ? `${homeScore} (${homePenalty})`
    : homeScore ?? "-";

  const awayResultText = awayPenalty != null
    ? `${awayScore} (${awayPenalty})`
    : awayScore ?? "-";

  const isHomeWinner = homeResult > awayResult;
  const isAwayWinner = awayResult > homeResult;

  const matchStatus = extraTime != null
    ? penalties != null
      ? {
        short: "PEN",
        label: "Match decided by penalties"
      }
      : {
        short: "ET",
        label: "Extra time"
      }
    : null;

  const formattedDate = formatDate(date);

  return (
    <article className="card card-match h-100">
      <div className="card-body card-match__body">
        <ul className="list-group list-group-light list-group-small card-match__list">
          <li className="list-group-item card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${homeTeam.flag}`} aria-hidden="true"></i>
              <span className={isHomeWinner ? "card-match__team-winner" : ""}>
                {homeTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              {homeResultText}
            </div>
          </li>

          <li className="list-group-item border-0 card-match__team">
            <div className="card-match__team-info">
              <i className={`flag flag-${awayTeam.flag}`} aria-hidden="true"></i>
              <span className={isAwayWinner ? "card-match__team-winner" : ""}>
                {awayTeam.name}
              </span>
            </div>

            <div className="card-match__team-result">
              {awayResultText}
            </div>
          </li>

          {matchStatus && (
            <li className="card-match__status">
              <span className="card-match__status-badge">
                <span aria-hidden="true">
                  {matchStatus.short}
                </span>

                <span className="visually-hidden">
                  {matchStatus.label}
                </span>
              </span>
            </li>
          )}
        </ul>
      </div>

      <div className="card-footer card-match__footer">
        <div className="card-match__meta">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="card-match__meta-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Stadium: </span>
          {stadium}
        </div>

        <div className="card-match__meta">
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="card-match__meta-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Date: </span>
          {formattedDate}
        </div>
      </div>
    </article>
  );
}

export default MatchCard;
