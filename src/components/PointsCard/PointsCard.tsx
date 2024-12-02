import "./PointsCard.css";

interface PointsProps {
  maxPoints: number;
  availablePoints: number;
}

export function PointsCard({ maxPoints, availablePoints }: PointsProps) {
  return (
    <div className="pointsContainer">
      <p className="availablePoints" data-testid={`availablePoints`}>
        {availablePoints}/{maxPoints}
      </p>
      <h3 className="pointsTitle">Points Spent</h3>
    </div>
  );
}
