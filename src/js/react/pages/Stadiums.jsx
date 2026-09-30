import { useState } from "react";

// Data
import { stadiums } from "../../data/stadiums/stadiums";
import { sortStadiums } from "../../data/stadiums/sortOptions";

// Components
import StadiumGrid from "../components/Stadiums/StadiumGrid";
import Toolbar from "../components/Toolbar/Toolbar";
import SearchBar from "../components/Toolbar/SearchBar";
import Sort from "../components/Toolbar/Sort";

// Utilities
import { sortBy } from "../../utils/sort";

function Stadiums() {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState(sortStadiums[0].value);

  const filteredStadiums = stadiums.filter((stadium) =>
    stadium.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedStadiums = sortBy(filteredStadiums, sortOption);

  return (
    <section className="stadiums-content">
      <h2 className="visually-hidden">
        Tournament stadiums
      </h2>

      <Toolbar>
        <SearchBar
          name="stadiums"
          query={query}
          onQueryChange={setQuery}
        />

        <Sort
          name="stadiums"
          value={sortOption}
          options={sortStadiums}
          onChange={setSortOption}
        />
      </Toolbar>

      {sortedStadiums.length > 0 ? (
        <StadiumGrid stadiums={sortedStadiums} />
      ) : (
        <div className="alert alert-info" role="status">
          No stadiums found.
        </div>
      )}
    </section>
  );
}

export default Stadiums;
