import TeamGrid from "../components/Teams/TeamGrid";

import { teams } from "../../data/teams";

function Teams() {
  return (
    <>
      <TeamGrid teams={teams} />
    </>
  );
}

export default Teams;
