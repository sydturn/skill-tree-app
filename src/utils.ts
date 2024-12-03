import { RUNE_TYPES, RuneType } from "./types";

export const getReadableRune = (runeType: RuneType) => {
	switch(runeType) {
		case RUNE_TYPES.STACK : {
			return "Inventory stacking";
		}
		case RUNE_TYPES.BOAT: {
			return "Water transportation";
		}
		case RUNE_TYPES.CAKE :{
			return "Baking";
		}
		case RUNE_TYPES.CUTLERY: {
			return "Consumable boost";
		}
		case RUNE_TYPES.LIGHTNING: {
			return "Stamina increase";
		}
		case RUNE_TYPES.SKULL: {
			return "Damage increase";
		}
		case RUNE_TYPES.SNORKELING: {
			return "Water breathing";
		}
	}
}