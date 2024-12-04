import { useState } from "react";
import { Rune } from "./components/Rune/Rune";
import "./RuneTree.css";
import classNames from "classnames";
import { RuneType } from "../../../../types";

interface RuneTreeProps {
  title: string;
  orderedRunes: RuneType[];
  remainingPoints: number;
  handleTalentPointSpend(spentPointCount: number): void;
  handleSpendRejection(): void;
}

export function RuneTree({
  title,
  orderedRunes,
  remainingPoints,
  handleTalentPointSpend,
  handleSpendRejection,
}: RuneTreeProps) {
  const [runeTreeProgress, setRuneTreeProgress] = useState(-1);

  const handleRuneClick = (skillIndex: number, isRefund?: boolean) => {
    const cost = (runeTreeProgress - skillIndex) * -1;
    if (cost > remainingPoints) {
      handleSpendRejection();
      return;
    }
    if (remainingPoints === 0 && skillIndex < 0) {
      return;
    }

    // if its a refund, refund the one clicked on as well
    if (isRefund) {
      const refundAmount = cost - 1;
      setRuneTreeProgress(skillIndex - 1);
      handleTalentPointSpend(refundAmount);
      return;
    }
    // don't refund if isRefund is false (left click)
    else if (cost > 0 && !isRefund) {
      setRuneTreeProgress(skillIndex);
      handleTalentPointSpend(cost);
      return;
    }
  };

  return (
    <div className="runeTreeContainer">
      <h5 className="runeTreeTitle">{title}</h5>
      <div className="runeTree">
        {orderedRunes.map((runeName, runeIndex) => {
          const isPurchased = runeIndex <= runeTreeProgress;
          return (
            <div className={"runeBranchContainer"} key={runeName}>
              <Rune
                runeType={runeName}
                isPurchased={isPurchased}
                onRuneClick={handleRuneClick}
                runeNumber={runeIndex}
              />
              {runeIndex !== orderedRunes.length - 1 && (
                <div
                  className={classNames(["branch", isPurchased && "active"])}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
