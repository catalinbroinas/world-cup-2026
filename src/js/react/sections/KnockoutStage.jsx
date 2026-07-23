import { useState } from "react";

// Constants
import { KNOCKOUT_STAGE } from "../../constants/knockoutStage";

// Helpers
import { getKnockoutStageTabs } from "../../utils/knockoutStage";

// Components
import Tabs from "../components/Navigation/Tabs";

function KnockoutStage() {
  const stageTabs = getKnockoutStageTabs(KNOCKOUT_STAGE);

  const [activeStageId, setActiveStageId] = useState(stageTabs[0].id);

  return (
    <div className="knockout-stage-content">
      <nav
        className="knockout-stage-navigation"
        aria-label="Knockout stage navigation"
      >
        <Tabs
          tabs={stageTabs}
          activeTab={activeStageId}
          onTabChange={setActiveStageId}
        />
      </nav>
    </div>
  );
}

export default KnockoutStage;
