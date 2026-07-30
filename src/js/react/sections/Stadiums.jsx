import { stadiums } from "../../data/stadiums/stadiums";

import StadiumGrid from "../components/Stadiums/StadiumGrid";

function Stadiums() {
  return (
    <section className="stadiums-content">
      <StadiumGrid stadiums={stadiums} />
    </section>
  );
}

export default Stadiums;
