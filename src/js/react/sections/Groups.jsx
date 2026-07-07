import { useState } from "react";

// Data
import { groups } from "../data/groups";

// Components
import GroupTabs from "../components/Groups/GroupTabs";
import GroupTable from "../components/Groups/GroupTable";

function Groups() {
  const [activeGroupId, setActiveGroupId] = useState(groups[0].id);

  const selectedGroup = groups.find(
    (group) => group.id === activeGroupId
  );

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
    </>
  );
}

export default Groups;
