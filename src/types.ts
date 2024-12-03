
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