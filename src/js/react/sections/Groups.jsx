import { useState } from "react";

// Data
import { groups } from "../../data/groups";
import { matches } from "../../data/matches";

// Constants
import { GROUP_MATCH_DAYS } from "../../constants/groups";

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

  const matchDays = GROUP_MATCH_DAYS.map((round) => (
    {
      id: round,
      title: `Match day ${round}`,
      matches: groupMatches.filter((match) => match.round === round)
    }
  )).filter((matchDay) => matchDay.matches.length > 0);

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

      {matchDays.length > 0 && <section className="group-matches">
        <h2 className="visually-hidden">Group matches</h2>

        {matchDays.map((matchDay) => (
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
