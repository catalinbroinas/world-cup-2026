import { useState } from "react";

import { stadiums } from "../../data/stadiums/stadiums";

import StadiumGrid from "../components/Stadiums/StadiumGrid";
import SearchBar from "../components/Toolbar/SearchBar";

function Stadiums() {
  const [query, setQuery] = useState("");

  const filteredStadiums = stadiums.filter((stadium =>
    stadium.name.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <section className="stadiums-content">
      <h2 className="visually-hidden">
        Tournament stadiums
      </h2>

      <div className="toolbar">
        <SearchBar
          name="stadiums"
          query={query}
          onQueryChange={setQuery}
        />
      </div>

      {filteredStadiums.length > 0 ? (
        <StadiumGrid stadiums={filteredStadiums} />
      ) : (
        <div className="alert alert-info" role="status">
          No stadiums found.
        </div>
      )}
    </section>
  );
}

export default Stadiums;
