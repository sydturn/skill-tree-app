import { useState } from "react";
import { Rune } from "./components/Rune/Rune";
import "./RuneTree.css";
import classNames from "classnames";
import { RuneType } from "../../types";

interface RuneTreeProps {
  title: string;
  orderedRunes: RuneType[];
  hasTalentPointsToSpend: boolean;
  handleTalentPointSpend(spentPointCount: number): void;
}

export function RuneTree({
  title,
  orderedRunes,
  hasTalentPointsToSpend,
  handleTalentPointSpend,
}: RuneTreeProps) {
  const [runeTreeProgress, setRuneTreeProgress] = useState(-1);

  const handleRuneClick = (pointSpend: number) => {
    if (!hasTalentPointsToSpend && pointSpend < 0) {
      return;
    }
    setRuneTreeProgress(runeTreeProgress - pointSpend);
    handleTalentPointSpend(pointSpend);
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
                isAvailable={runeIndex - 1 === runeTreeProgress}
                isRefundable={runeIndex === runeTreeProgress}
                onRuneClick={handleRuneClick}
                predecessor={
                  runeIndex > 0 ? orderedRunes[runeIndex - 1] : undefined
                }
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
