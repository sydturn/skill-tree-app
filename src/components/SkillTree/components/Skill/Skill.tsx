import classNames from "classnames";
import "./Skill.css";

export const SKILL_TYPES = {
  STACK: "stack",
  CUTLERY: "cutlery",
  CAKE: "cake",
  CROWN: "crown",
  BOAT: "boat",
  SNORKELING: "snorkeling",
  LIGHTNING: "lightning",
  SKULL: "skull",
};

export type SkillType = (typeof SKILL_TYPES)[keyof typeof SKILL_TYPES];

interface SkillProps {
  skillType: SkillType;
  isPurchased: boolean;
  isAvailable: boolean;
  isRefundable: boolean;
  onSkillClick(progressCount: number): void;
}

export function Skill({
  skillType,
  isPurchased,
  isAvailable,
  isRefundable,
  onSkillClick,
}: SkillProps) {
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

  return (
    <div className={classNames(["shinyBorder", isPurchased && "active"])}>
      <div
        data-testid={`skill-${skillType}`}
        className={classNames(["skill", skillType, !isPurchased && "inactive"])}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
      />
    </div>
  );
}
