import { useEffect } from "react";
import { Modal, initMDB } from "mdb-ui-kit/js/mdb.es.min";

function MatchCard({ match }) {
  const { homeTeam, awayTeam, stadium, referee } = match;

  const isHomeWinner = homeTeam.result > awayTeam.result;
  const isAwayWinner = awayTeam.result > homeTeam.result;

  useEffect(() => {
    initMDB({ Modal });
  }, []);

  return (
    <div
      role="button"
      className="card card-match"
      data-mdb-modal-init
      data-mdb-target={`#match-modal-${match.id}`}
    >
      <div className="card-body card-match__body">
        <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item card-match__team">
            <div className="card-match__country">
              <i className={`flag flag-${homeTeam.flag} me-3`}></i>
              <span className={isHomeWinner ? "fw-bold" : ""}>
                {homeTeam.name}
              </span>
            </div>

            <div className="card-match__result">
              <strong>{homeTeam.result ?? "-"}</strong>
            </div>
          </li>

          <li className="list-group-item card-match__team">
            <div className="card-match__country">
              <i className={`flag flag-${awayTeam.flag} me-3`}></i>
              <span className={isAwayWinner ? "fw-bold" : ""}>
                {awayTeam.name}
              </span>
            </div>

            <div className="card-match__result">
              <strong>{awayTeam.result ?? ""}</strong>
            </div>
          </li>
        </ul>
      </div>

      <div className="card-footer card-match__footer">
        <div className="card-match__meta">
          <i className="fa-solid fa-location-dot me-2"></i>
          {stadium}
        </div>

        <div className="card-match__meta">
          <i className="fa-solid fa-user-tie me-2"></i>
          {referee}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
