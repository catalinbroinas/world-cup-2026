import { stadiums } from "../../data/stadiums/stadiums";

import StadiumGrid from "../components/Stadiums/StadiumGrid";

function Stadiums() {
  return (
    <section className="stadiums-content">
      <h2 className="visually-hidden">
        Tournament stadiums
      </h2>

      <StadiumGrid stadiums={stadiums} />
    </section>
  );
}

export default Stadiums;
