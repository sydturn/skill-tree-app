import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Rune Tree App", () => {
  describe("Runes", () => {
    it("unlocks when user left clicks on a rune", () => {
      render(<App />);
      const firstRune = screen.getByTestId("rune-stack");
      expect(firstRune).toHaveClass("inactive");
      fireEvent.click(firstRune);
      expect(firstRune).not.toHaveClass("inactive");
    });

    it("locks when a user right clicks on rune", () => {
      render(<App />);
      const firstRune = screen.getByTestId("rune-stack");
      expect(firstRune).toHaveClass("inactive");
      fireEvent.click(firstRune);
      expect(firstRune).not.toHaveClass("inactive");
      fireEvent.contextMenu(firstRune);
      expect(firstRune).toHaveClass("inactive");
    });

    it("does not unlock when the previous rune has yet to be unlocked", () => {
      render(<App />);
      const thirdRune = screen.getByTestId("rune-cake");
      fireEvent.click(thirdRune);
      expect(thirdRune).toHaveClass("inactive");
    });

    it("does not refund point when there are talent points in higher runes", () => {
      render(<App />);
      const firstRune = screen.getByTestId("rune-stack");
      const secondRune = screen.getByTestId("rune-cutlery");
      fireEvent.click(firstRune);
      fireEvent.click(secondRune);
      fireEvent.contextMenu(firstRune);
      expect(firstRune).not.toHaveClass("inactive");
      expect(secondRune).not.toHaveClass("inactive");
    });
  });

  describe("TalentPoints", () => {
    it("allows the user to spend 6 talent points", () => {
      render(<App />);
      const runes = [
        "stack",
        "cutlery",
        "cake",
        "crown",
        "boat",
        "snorkeling",
        "lightning",
        "skull",
      ];
      const availableTalentPoints = screen.getByTestId("availableTalentPoints");

      runes.forEach((rune, index) => {
        const runeNode = screen.getByTestId(`rune-${rune}`);
        fireEvent.click(runeNode);
        if (index < 6) {
          expect(runeNode).not.toHaveClass("inactive");
        } else if (index > 5) {
          expect(runeNode).toHaveClass("inactive");
        }
      });

      expect(availableTalentPoints).toContainHTML("0/6");
    });

    it("costs one point to unlock a rune", () => {
      render(<App />);
      const firstRune = screen.getByTestId("rune-stack");
      const totalTalentPoints = screen.getByTestId("availableTalentPoints");
      expect(totalTalentPoints).toContainHTML("6/6");
      fireEvent.click(firstRune);
      expect(totalTalentPoints).toContainHTML("5/6");
    });

    it("displays the current total of talent points", () => {
      render(<App />);
      const totalTalentPoints = screen.getByTestId("availableTalentPoints");
      expect(totalTalentPoints).toBeInTheDocument();
      expect(totalTalentPoints).toContainHTML("6/6");
    });

    it("returns one rune point when a rune is right clicked", () => {
      render(<App />);
      const firstRune = screen.getByTestId("rune-stack");
      const totalTalentPoints = screen.getByTestId("availableTalentPoints");
      expect(totalTalentPoints).toContainHTML("6/6");
      fireEvent.click(firstRune);
      expect(totalTalentPoints).toContainHTML("5/6");
      fireEvent.contextMenu(firstRune);
      expect(totalTalentPoints).toContainHTML("6/6");
    });
  });
});
