import classNames from "classnames";
import "./TalentPointsCard.css";

interface TalentPointsProps {
  maxTalentPoints: number;
  availableTalentPoints: number;
}

export function TalentPointsCard({
  maxTalentPoints,
  availableTalentPoints,
}: TalentPointsProps) {
  return (
    <div className="talentPointsContainer">
      <p
        className={classNames([
          "availableTalentPoints",
          availableTalentPoints === 0 && "noTalentPointsAvailable inactive",
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
        Points Spent
      </h3>
    </div>
  );
}
