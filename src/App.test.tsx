import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Skill Tree App", () => {
  describe("Skills", () => {
    it("unlocks when user left clicks on a skill", () => {
      render(<App />);
      const firstSkill = screen.getByTestId("skill-stack");
      expect(firstSkill).toHaveClass("inactive");
      fireEvent.click(firstSkill);
      expect(firstSkill).not.toHaveClass("inactive");
    });

    it("locks when a user right clicks on skill", () => {
      render(<App />);
      const firstSkill = screen.getByTestId("skill-stack");
      expect(firstSkill).toHaveClass("inactive");
      fireEvent.click(firstSkill);
      expect(firstSkill).not.toHaveClass("inactive");
      fireEvent.contextMenu(firstSkill);
      expect(firstSkill).toHaveClass("inactive");
    });

    it("does not unlock when the previous skill has yet to be unlocked", () => {
      render(<App />);
      const thirdSkill = screen.getByTestId("skill-cake");
      fireEvent.click(thirdSkill);
      expect(thirdSkill).toHaveClass("inactive");
    });

    it("does not refund point when there are points in higher skills", () => {
      render(<App />);
      const firstSkill = screen.getByTestId("skill-stack");
      const secondSkill = screen.getByTestId("skill-cutlery");
      fireEvent.click(firstSkill);
      fireEvent.click(secondSkill);
      fireEvent.contextMenu(firstSkill);
      expect(firstSkill).not.toHaveClass("inactive");
      expect(secondSkill).not.toHaveClass("inactive");
    });
  });

  describe("Points", () => {
    it("allows the user to spend 6 points", () => {
      render(<App />);
      const skills = [
        "stack",
        "cutlery",
        "cake",
        "crown",
        "boat",
        "snorkeling",
        "lightning",
        "skull",
      ];
      const availablePoints = screen.getByTestId("availablePoints");

      skills.forEach((skill, index) => {
        const skillNode = screen.getByTestId(`skill-${skill}`);
        fireEvent.click(skillNode);
        if (index < 6) {
          expect(skillNode).not.toHaveClass("inactive");
        } else if (index > 5) {
          expect(skillNode).toHaveClass("inactive");
        }
      });

      expect(availablePoints).toContainHTML("0/6");
    });

    it("costs one point to unlock a skill", () => {
      render(<App />);
      const firstSkill = screen.getByTestId("skill-stack");
      const totalPoints = screen.getByTestId("availablePoints");
      expect(totalPoints).toContainHTML("6/6");
      fireEvent.click(firstSkill);
      expect(totalPoints).toContainHTML("5/6");
    });

    it("displays the current total of points", () => {
      render(<App />);
      const totalPoints = screen.getByTestId("availablePoints");
      expect(totalPoints).toBeInTheDocument();
      expect(totalPoints).toContainHTML("6/6");
    });

    it("returns one skill point when a skill is right clicked", () => {
      render(<App />);
      const firstSkill = screen.getByTestId("skill-stack");
      const totalPoints = screen.getByTestId("availablePoints");
      expect(totalPoints).toContainHTML("6/6");
      fireEvent.click(firstSkill);
      expect(totalPoints).toContainHTML("5/6");
      fireEvent.contextMenu(firstSkill);
      expect(totalPoints).toContainHTML("6/6");
    });
  });
});
