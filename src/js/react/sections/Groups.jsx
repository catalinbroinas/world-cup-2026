import { useState } from "react";

// Data
import { groups } from "../../data/groups";
import { matches } from "../../data/matches";

// Components
import GroupTabs from "../components/Groups/GroupTabs";
import GroupTable from "../components/Groups/GroupTable";
import MatchGrid from "../components/Matchs/MatchGrid";

function Groups() {
  const [activeGroupId, setActiveGroupId] = useState(groups[0].id);

  const selectedGroup = groups.find(
    (group) => group.id === activeGroupId
  );

  const groupMatches = matches.filter((match) => match.groupId === activeGroupId);

  const matchDay1 = groupMatches.filter((match) => match.round === 1);
  const matchDay2 = groupMatches.filter((match) => match.round === 2);
  const matchDay3 = groupMatches.filter((match) => match.round === 3);

  return (
    <div className="groups-content">
      <nav className="group-navigation" aria-label="Groups navigation">
        <GroupTabs
          groups={groups}
          activeTab={activeGroupId}
          onTabChange={setActiveGroupId}
        />
      </nav>

      <section className="group-stats">
        <GroupTable group={selectedGroup} />
      </section>

      <section className="group-matches">
        <h2 className="visually-hidden">Group matches</h2>

        <section className="group-matches__round">
          <h3 className="subtitle mb-0">Match day 1</h3>
          <hr className="hr mt-2 mb-4" />

          <MatchGrid matches={matchDay1} />
        </section>

        <section className="group-matches__round">
          <h3 className="subtitle mb-0">Match day 2</h3>
          <hr className="hr mt-2 mb-4" />

          <MatchGrid matches={matchDay2} />
        </section>

        <section className="group-matches__round">
          <h3 className="subtitle mb-0">Match day 3</h3>
          <hr className="hr mt-2 mb-4" />

          <MatchGrid matches={matchDay3} />
        </section>
      </section>
    </div>
  );
}

export default Groups;
