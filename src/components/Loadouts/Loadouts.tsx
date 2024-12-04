import { useState } from "react";

import "./Loadouts.css";
import { RuneTree } from "./components/RuneTree/RuneTree";
import { TalentPointsCard } from "./components/TalentPointsCard/TalentPointsCard";

const MAX_POINTS = 6;

export function Loadouts() {
  const [availableTalentPoints, setAvailableTalentPoints] =
    useState(MAX_POINTS);
  const [showSpendRejection, setShowSpendRejection] = useState(false);
  const survivalLoadout = ["stack", "cutlery", "cake", "crown"];
  const athleticsLoadout = ["boat", "snorkeling", "lightning", "skull"];

  const onSpendPoint = (spentPointCount: number) => {
    setShowSpendRejection(false);
    setAvailableTalentPoints(availableTalentPoints - spentPointCount);
  };

  // we don't need to alert them each time, we can clear every other click instead of adding unnecessary logic
  const onSpendRejection = () => {
    setShowSpendRejection(!showSpendRejection);
  };

  return (
    <div className="loadouts">
      <h4 className="calculatorTitle">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h4>
      <div className="treePointContainer">
        <div className="runeTrees">
          <RuneTree
            title="Talent Path 1"
            handleTalentPointSpend={onSpendPoint}
            handleSpendRejection={onSpendRejection}
            orderedRunes={survivalLoadout}
            remainingPoints={availableTalentPoints}
          />
          <RuneTree
            title="Talent Path 2"
            handleTalentPointSpend={onSpendPoint}
            handleSpendRejection={onSpendRejection}
            orderedRunes={athleticsLoadout}
            remainingPoints={availableTalentPoints}
          />
        </div>
        <TalentPointsCard
          maxTalentPoints={MAX_POINTS}
          availableTalentPoints={availableTalentPoints}
          showSpendRejection={showSpendRejection}
        />
      </div>
    </div>
  );
}
