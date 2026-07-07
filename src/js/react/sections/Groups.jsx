import { useState } from "react";

// Data
import { groups } from "../data/groups";
import { matches } from "../data/matches";

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

  return (
    <>
      <div className="group-navigation">
        <GroupTabs
          groups={groups}
          activeTab={activeGroupId}
          onTabChange={setActiveGroupId}
        />
      </div>

      <div className="group-stats">
        <GroupTable group={selectedGroup} />
      </div>

      <div className="group-matches">
        <h3 className="subtitle mb-0">Match day 1</h3>
        <hr className="hr mt-2 mb-4" />
        <MatchGrid matches={matchDay1} />
      </div>
    </>
  );
}

export default Groups;
