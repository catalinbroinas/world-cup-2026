
function GroupTable({ group }) {
  const { teams, name } = group;

  const QUALIFIED_TEAMS = 2;

  const standing = [...teams].sort((a, b) =>
    b.Pts - a.Pts ||
    (b.GF - b.GA) - (a.GF - a.GA) ||
    b.GF - a.GF
  );

  return (
    <div className="table-responsive group-table">
      <h3 className="group-table__title">{name}</h3>

      <table className="table table-hover group-table__table">
        <thead className="table-light group-table__head">
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-center">Team</th>
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
              className={`group-table__place ${
                index < QUALIFIED_TEAMS
                  ? "group-table__place--qualification"
                  : ""
              }`}
            >
              <td>
                <strong>{index + 1}.</strong>
              </td>

              <td>
                <span className="group-table__country">
                  <i
                    className={`flag flag-${team.flag} me-2`}
                    aria-hidden="true"
                  ></i>
                  {team.name}
                </span>
              </td>

              <td>{team.MP}</td>
              <td>{team.W}</td>
              <td>{team.D}</td>
              <td>{team.L}</td>
              <td>{team.GF}</td>
              <td>{team.GA}</td>
              <td>{team.GF - team.GA}</td>

              <td>
                <strong>{team.Pts}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupTable;
