import { useState } from "react";

import { SkillTree } from "../SkillTree/SkillTree";
import "./SkillTreesContainer.css";
import { PointsCard } from "../PointsCard/PointsCard";

const MAX_POINTS = 6;

export function SkillTreesContainer() {
  const [availableSkillPoints, setAvailableSkillPoints] = useState(MAX_POINTS);
  const survivalPathOrder = ["stack", "cutlery", "cake", "crown"];
  const athleticsPathOrder = ["boat", "snorkeling", "lightning", "skull"];

  const onSpendPoint = (spentPointCount: number) => {
    setAvailableSkillPoints(availableSkillPoints + spentPointCount);
  };

  return (
    <div className="skillTreesContainer">
      <h4 className="calculatorTitle">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h4>
      <div className="treePointContainer">
        <div className="skillTrees">
          <SkillTree
            title="Talent Path 1"
            handleSkillPointSpend={onSpendPoint}
            orderedSkills={survivalPathOrder}
            hasPointsToSpend={availableSkillPoints > 0}
          />
          <SkillTree
            title="Talent Path 2"
            handleSkillPointSpend={onSpendPoint}
            orderedSkills={athleticsPathOrder}
            hasPointsToSpend={availableSkillPoints > 0}
          />
        </div>
        <PointsCard
          maxPoints={MAX_POINTS}
          availablePoints={availableSkillPoints}
        />
      </div>
    </div>
  );
}
