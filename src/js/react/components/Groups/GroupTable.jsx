// Constants
import { PLACE_CLASS } from "../../../constants/groups";

// Helpers
import {
  getPlaceStatus,
  getGroupStanding,
  calcMatchesPlayed,
  calcGoalDifference,
  calcPoints
} from "../../../utils/groups";

function GroupTable({ group }) {
  const { teams, name } = group;

  const standing = getGroupStanding(teams);

  return (
    <div className="table-responsive group-table">
      <h3 className="group-table__title">{name}</h3>

      <table className="table table-hover group-table__table">
        <thead className="table-light group-table__head">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">MP</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>

        <tbody className="group-table__body">
          {standing.map((team, index) => (
            <tr
              key={team.id}
            >
              <td className={`group-table__place ${PLACE_CLASS[getPlaceStatus(index + 1)]}`}>
                <strong>{index + 1}.</strong>
              </td>

              <td>
                <span className="group-table__country">
                  <i
                    className={`flag flag-${team.flag} me-2`}
                    aria-hidden="true"
                  ></i>
                  {team.country}
                </span>
              </td>

              <td>{calcMatchesPlayed(team.W, team.D, team.L)}</td>
              <td>{team.W}</td>
              <td>{team.D}</td>
              <td>{team.L}</td>
              <td>{team.GF}</td>
              <td>{team.GA}</td>
              <td>{calcGoalDifference(team.GF, team.GA)}</td>

              <td>
                <strong>{calcPoints(team.W, team.D)}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupTable;
