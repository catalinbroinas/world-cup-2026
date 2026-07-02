import TeamCard from "./TeamCard";

function TeamGrid({ teams }) {
  return (
    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-xl-5 gx-4 gy-5">
      {teams.map((team) => (
        <div key={team.id} className="col">
          <TeamCard team={team} />
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;
