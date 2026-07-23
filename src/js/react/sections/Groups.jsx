import { useState } from "react";

// Data
import { groups } from "../../data/groups";
import { groupMatches as matches } from "../../data/matches/groupMatches";

// Constants
import { GROUP_MATCH_DAYS } from "../../constants/groups";

// Helpers
import {
  getGroup,
  getGroupMatches,
  getGroupMatchDays,
  getGroupTabs,
  getDisplayGroups
} from "../../utils/groups";

// Components
import Tabs from "../components/Navigation/Tabs";
import GroupTable from "../components/Groups/GroupTable";
import MatchGrid from "../components/Matchs/MatchGrid";

function Groups() {
  const displayGroups = getDisplayGroups(groups);

  const [activeGroupId, setActiveGroupId] = useState(displayGroups[0].id);

  const tabs = getGroupTabs(displayGroups);

  const selectedGroup = getGroup(displayGroups, activeGroupId);
  const groupMatches = getGroupMatches(matches, activeGroupId);
  const groupMatchDays = getGroupMatchDays(groupMatches);

  return (
    <div className="groups-content">
      <nav className="group-navigation" aria-label="Groups navigation">
        <Tabs
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
