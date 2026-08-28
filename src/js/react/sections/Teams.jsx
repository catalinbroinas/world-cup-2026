import { useState } from "react";

import TeamGrid from "../components/Teams/TeamGrid";
import SearchBar from "../components/Toolbar/SearchBar";

import { teams } from "../../data/teams/teams";

function Teams() {
  const [query, setQuery] = useState("");

  const filteredTeams = teams.filter((team) => 
    team.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="teams-content">
      <h2 className="visually-hidden">
        Tournament teams
      </h2>

      <div className="teams-toolbar">
        <SearchBar name="teams" query={query} onQueryChange={setQuery} />
      </div>

      {filteredTeams.length > 0 ? (
        <TeamGrid teams={filteredTeams} />
      ) : (
        <div className="alert alert-info" role="status">
          No teams found.
        </div>
      )}
    </section>
  );
}

export default Teams;
