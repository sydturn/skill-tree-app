import classNames from "classnames";
import "./Skill.css";
import { SkillType } from "../../../../types";
import { getReadableSkill } from "../../../../utils";

interface SkillProps {
  skillType: SkillType;
  isPurchased: boolean;
  isAvailable: boolean;
  isRefundable: boolean;
  onSkillClick(progressCount: number): void;
  predecessor?: SkillType;
}

export function Skill({
  skillType,
  isPurchased,
  isAvailable,
  isRefundable,
  onSkillClick,
  predecessor,
}: SkillProps) {
  const readableSkill = getReadableSkill(skillType);
  const handleLeftClick = () => {
    if (!isPurchased && isAvailable) {
      onSkillClick(-1);
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isPurchased && isRefundable) {
      onSkillClick(1);
    }
  };

  const ariaDescription = (() => {
    if (isPurchased) {
      return `"${readableSkill}" is active. ${
        isRefundable ? "Right click to refund." : ""
      }`;
    } else if (isAvailable) {
      return `"${readableSkill}": Left click to purchase.`;
    } else if (predecessor) {
      return `"${readableSkill}" is not purchasable. Unlock "${getReadableSkill(
        predecessor
      )}" first.`;
    }
  })();

  return (
    <button
      title={ariaDescription}
      aria-label={`${readableSkill}`}
      aria-description={ariaDescription}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      className={classNames(["shinyBorder", isPurchased && "active"])}
    >
      <div
        data-testid={`skill-${skillType}`}
        className={classNames(["skill", skillType, !isPurchased && "inactive"])}
      />
    </button>
  );
}
