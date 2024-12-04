import classNames from "classnames";
import "./TalentPointsCard.css";

interface TalentPointsProps {
  maxTalentPoints: number;
  availableTalentPoints: number;
  showSpendRejection: boolean;
}

export function TalentPointsCard({
  maxTalentPoints,
  availableTalentPoints,
  showSpendRejection,
}: TalentPointsProps) {
  return (
    <div className="talentPointsContainer">
      <p
        className={classNames([
          "availableTalentPoints",
          availableTalentPoints === 0 && "noTalentPointsAvailable inactive",
          showSpendRejection && "notEnoughResources",
        ])}
        data-testid={`availableTalentPoints`}
      >
        {availableTalentPoints}/{maxTalentPoints}
      </p>
      <h3
        className={classNames([
          "talentPointsTitle",
          availableTalentPoints === 0 && "inactive",
        ])}
      >
        TalentPoints Spent
      </h3>
    </div>
  );
}
