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
            <th scope="col" title="Position">#</th>
            <th scope="col">Team</th>
            <th scope="col" title="Matches Played">MP</th>
            <th scope="col" title="Wins">W</th>
            <th scope="col" title="Draws">D</th>
            <th scope="col" title="Losses">L</th>
            <th scope="col" title="Goals For">GF</th>
            <th scope="col" title="Goals Against">GA</th>
            <th scope="col" title="Goal Difference">GD</th>
            <th scope="col" title="Points">Pts</th>
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

              <th scope="row" className="group-table__team">
                <i
                  className={`flag flag-${team.flag}`}
                  aria-hidden="true"
                ></i>
                <span className="group-table__team-name">
                  {team.country}
                </span>
              </th>

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
