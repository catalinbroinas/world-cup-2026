import StadiumCard from "./StadiumCard";

function StadiumGrid({ stadiums }) {
  return (
    <div className="row row-cols-xl-2 row-cols-1 gy-5">
      {stadiums.map((stadium) => (
        <div key={stadium.id} className="col">
          <StadiumCard stadium={stadium} />
        </div>
      ))}
    </div>
  );
}

export default StadiumGrid;
