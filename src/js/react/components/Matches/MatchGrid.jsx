import MatchCard from "./MatchCard";

function MatchGrid({ matches }) {
  return (
    <div
      className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-xl-5 gx-4 gy-5"
    >
      {matches.map((match) => (
        <div
          key={match.id}
          className="col"
        >
          <MatchCard match={match} />
        </div>
      ))}
    </div>
  );
}

export default MatchGrid;
