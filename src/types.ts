
export const RUNE_TYPES = {
	STACK: "stack",
	CUTLERY: "cutlery",
	CAKE: "cake",
	CROWN: "crown",
	BOAT: "boat",
	SNORKELING: "snorkeling",
	LIGHTNING: "lightning",
	SKULL: "skull",
  };
  
  export type RuneType = (typeof RUNE_TYPES)[keyof typeof RUNE_TYPES];