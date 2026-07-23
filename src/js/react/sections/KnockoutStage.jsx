import { useState } from "react";

// Data
import { knockoutMatches } from "../../data/matches/knockoutMatches";

// Constants
import { KNOCKOUT_STAGE } from "../../constants/knockoutStage";

// Helpers
import {
  getKnockoutStageTabs,
  getKnockoutMatches
} from "../../utils/knockoutStage";

// Components
import Tabs from "../components/Navigation/Tabs";
import MatchGrid from "../components/Matchs/MatchGrid";

function KnockoutStage() {
  const stageTabs = getKnockoutStageTabs(KNOCKOUT_STAGE);

  const [activeStageId, setActiveStageId] = useState(stageTabs[0].id);

  const matches = getKnockoutMatches(knockoutMatches, activeStageId);

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

      {matches.length > 0 && (
        <section className="knockout-stage-matches">
          <MatchGrid matches={matches} />
        </section>
      )}
    </div>
  );
}

export default KnockoutStage;
