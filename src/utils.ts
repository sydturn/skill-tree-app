import { SKILL_TYPES, SkillType } from "./types";

export const getReadableSkill = (skillType: SkillType) => {
	switch(skillType) {
		case SKILL_TYPES.STACK : {
			return "Inventory stacking";
		}
		case SKILL_TYPES.BOAT: {
			return "Water transportation";
		}
		case SKILL_TYPES.CAKE :{
			return "Baking";
		}
		case SKILL_TYPES.CUTLERY: {
			return "Consumable boost";
		}
		case SKILL_TYPES.LIGHTNING: {
			return "Stamina increase";
		}
		case SKILL_TYPES.SKULL: {
			return "Damage increase";
		}
		case SKILL_TYPES.SNORKELING: {
			return "Water breathing";
		}
	}
}