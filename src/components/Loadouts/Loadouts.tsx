import { useState } from "react";

import "./Loadouts.css";
import { RuneTree } from "../RuneTree/RuneTree";
import { TalentPointsCard } from "../TalentPointsCard/TalentPointsCard";

const MAX_POINTS = 6;

export function Loadouts() {
  const [availableTalentPoints, setAvailableTalentPoints] =
    useState(MAX_POINTS);
  const survivalLoadout = ["stack", "cutlery", "cake", "crown"];
  const athleticsLoadout = ["boat", "snorkeling", "lightning", "skull"];

  const onSpendPoint = (spentPointCount: number) => {
    setAvailableTalentPoints(availableTalentPoints + spentPointCount);
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
            orderedRunes={survivalLoadout}
            hasTalentPointsToSpend={availableTalentPoints > 0}
          />
          <RuneTree
            title="Talent Path 2"
            handleTalentPointSpend={onSpendPoint}
            orderedRunes={athleticsLoadout}
            hasTalentPointsToSpend={availableTalentPoints > 0}
          />
        </div>
        <TalentPointsCard
          maxTalentPoints={MAX_POINTS}
          availableTalentPoints={availableTalentPoints}
        />
      </div>
    </div>
  );
}
