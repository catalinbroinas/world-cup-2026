import TeamGrid from "../components/Teams/TeamGrid";

import { teams } from "../../data/teams/teams";

function Teams() {
  return (
    <section className="teams-content">
      <h2 className="visually-hidden">
        Tournament teams
      </h2>
      
      <TeamGrid teams={teams} />
    </section>
  );
}

export default Teams;
