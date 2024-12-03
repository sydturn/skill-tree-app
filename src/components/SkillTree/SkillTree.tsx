import { useState } from "react";
import { Skill } from "./components/Skill/Skill";
import "./SkillTree.css";
import classNames from "classnames";
import { SkillType } from "../../types";

interface SkillTreeProps {
  title: string;
  orderedSkills: SkillType[];
  hasPointsToSpend: boolean;
  handleSkillPointSpend(spentPointCount: number): void;
}

export function SkillTree({
  title,
  orderedSkills,
  hasPointsToSpend,
  handleSkillPointSpend,
}: SkillTreeProps) {
  const [skillTreeProgress, setSkillTreeProgress] = useState(-1);

  const handleSkillClick = (pointSpend: number) => {
    if (!hasPointsToSpend && pointSpend < 0) {
      return;
    }
    setSkillTreeProgress(skillTreeProgress - pointSpend);
    handleSkillPointSpend(pointSpend);
  };

  return (
    <div className="skillTreeContainer">
      <h5 className="skillTreeTitle">{title}</h5>
      <div className="skillTree">
        {orderedSkills.map((skillName, skillIndex) => {
          const isPurchased = skillIndex <= skillTreeProgress;
          return (
            <div className={"skillBranchContainer"} key={skillName}>
              <Skill
                skillType={skillName}
                isPurchased={isPurchased}
                isAvailable={skillIndex - 1 === skillTreeProgress}
                isRefundable={skillIndex === skillTreeProgress}
                onSkillClick={handleSkillClick}
                predecessor={
                  skillIndex > 0 ? orderedSkills[skillIndex - 1] : undefined
                }
              />
              {skillIndex !== orderedSkills.length - 1 && (
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
