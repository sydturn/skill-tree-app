import classNames from "classnames";
import "./Rune.css";
import { RuneType } from "../../../../../../types";
import { getReadableRune } from "../../../../../../utils";
interface RuneProps {
  runeType: RuneType;
  isPurchased: boolean;
  onRuneClick(progressCount: number, isRefund: boolean): void;
  runeNumber: number;
}

export function Rune({
  runeType,
  isPurchased,
  onRuneClick,
  runeNumber,
}: RuneProps) {
  const readableRune = getReadableRune(runeType);
  const handleLeftClick = () => {
    onRuneClick(runeNumber, false);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onRuneClick(runeNumber, true);
  };

  return (
    <button
      aria-label={`${readableRune}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      className={classNames(["shinyBorder", isPurchased && "active"])}
    >
      <div
        data-testid={`rune-${runeType}`}
        className={classNames(["rune", runeType, !isPurchased && "inactive"])}
      />
    </button>
  );
}
