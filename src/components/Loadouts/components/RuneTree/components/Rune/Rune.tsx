import classNames from "classnames";
import "./Rune.css";
import { RuneType } from "../../../../../../types";
import { getReadableRune } from "../../../../../../utils";
interface RuneProps {
  runeType: RuneType;
  isPurchased: boolean;
  isAvailable: boolean;
  isRefundable: boolean;
  onRuneClick(progressCount: number): void;
  predecessor?: RuneType;
}

export function Rune({
  runeType,
  isPurchased,
  isAvailable,
  isRefundable,
  onRuneClick,
  predecessor,
}: RuneProps) {
  const readableRune = getReadableRune(runeType);
  const handleLeftClick = () => {
    if (!isPurchased && isAvailable) {
      onRuneClick(-1);
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isPurchased && isRefundable) {
      onRuneClick(1);
    }
  };

  const ariaDescription = (() => {
    if (isPurchased) {
      return `"${readableRune}" is active. ${
        isRefundable ? "Right click to refund." : ""
      }`;
    } else if (isAvailable) {
      return `"${readableRune}": Left click to purchase.`;
    } else if (predecessor) {
      return `"${readableRune}" is not purchasable. Unlock "${getReadableRune(
        predecessor
      )}" first.`;
    }
  })();

  return (
    <button
      title={ariaDescription}
      aria-label={`${readableRune}`}
      aria-description={ariaDescription}
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
