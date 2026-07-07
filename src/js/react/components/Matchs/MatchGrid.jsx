import MatchCard from "./MatchCard";

function MatchGrid({ matches }) {
  return (
    <div className="row gx-xl-5 gx-4 gy-5">
      {matches.map((match) => (
        <div
          key={match.id}
          className="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-10"
        >
          <MatchCard match={match} />
        </div>
      ))}
    </div>
  );
}

export default MatchGrid;
