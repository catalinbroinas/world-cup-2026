import { useState } from "react";

// Data
import { groups } from "../../data/groups";
import { matches } from "../../data/matches";

// Constants
import { GROUP_MATCH_DAYS } from "../../constants/groups";

// Helpers
import {
  getGroup,
  getGroupMatches,
  getGroupMatchDays,
  getGroupTabs
} from "../../utils/groups";

// Components
import GroupTabs from "../components/Groups/GroupTabs";
import GroupTable from "../components/Groups/GroupTable";
import MatchGrid from "../components/Matchs/MatchGrid";

function Groups() {
  const [activeGroupId, setActiveGroupId] = useState(groups[0].id);

  const tabs = getGroupTabs(groups);

  const selectedGroup = getGroup(groups, activeGroupId);
  const groupMatches = getGroupMatches(matches, activeGroupId);
  const groupMatchDays = getGroupMatchDays(groupMatches);

  return (
    <div className="groups-content">
      <nav className="group-navigation" aria-label="Groups navigation">
        <GroupTabs
          tabs={tabs}
          activeTab={activeGroupId}
          onTabChange={setActiveGroupId}
        />
      </nav>

      <section className="group-stats">
        <GroupTable group={selectedGroup} />
      </section>

      {groupMatchDays.length > 0 && <section className="group-matches">
        <h2 className="visually-hidden">Group matches</h2>

        {groupMatchDays.map((matchDay) => (
            <section key={matchDay.id} className="group-matches__round">
              <h3 className="subtitle mb-0">{matchDay.title}</h3>
              <hr className="hr mt-2 mb-4" />
              <MatchGrid matches={matchDay.matches} />
            </section>
        ))}
      </section>}
    </div>
  );
}

export default Groups;
