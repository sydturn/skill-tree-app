import classNames from "classnames";
import "./PointsCard.css";

interface PointsProps {
  maxPoints: number;
  availablePoints: number;
}

export function PointsCard({ maxPoints, availablePoints }: PointsProps) {
  return (
    <div className="pointsContainer">
      <p
        className={classNames([
          "availablePoints",
          availablePoints === 0 && "noPointsAvailable inactive",
        ])}
        data-testid={`availablePoints`}
      >
        {availablePoints}/{maxPoints}
      </p>
      <h3
        className={classNames([
          "pointsTitle",
          availablePoints === 0 && "inactive",
        ])}
      >
        Points Spent
      </h3>
    </div>
  );
}
