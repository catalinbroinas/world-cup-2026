import { useState } from "react";

// Components
import TeamGrid from "../components/Teams/TeamGrid";
import Toolbar from "../components/Toolbar/Toolbar";
import SearchBar from "../components/Toolbar/SearchBar";
import Sort from "../components/Toolbar/Sort";

// Data
import { teams } from "../../data/teams/teams";
import { sortTeams } from "../../data/teams/sortOptions";

// Utilities
import { sortBy } from "../../utils/sort";

function Teams() {
  // States
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState(sortTeams[0].value);

  // Processing
  const filteredTeams = teams.filter((team) => 
    team.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedTeams = sortBy(filteredTeams, sortOption);

  return (
    <section className="teams-content">
      <h2 className="visually-hidden">
        Tournament teams
      </h2>

      <Toolbar>
        <SearchBar
          name="teams"
          query={query}
          onQueryChange={setQuery}
        />

        <Sort
          name="teams"
          value={sortOption}
          options={sortTeams}
          onChange={setSortOption}
        />
      </Toolbar>

      {sortedTeams.length > 0 ? (
        <TeamGrid teams={sortedTeams} />
      ) : (
        <div className="alert alert-info" role="status">
          No teams found.
        </div>
      )}
    </section>
  );
}

export default Teams;
