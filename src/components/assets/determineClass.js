import { CLASSES } from './classes.enum';
import { STATS } from './stats.enum';

export const determineClass = (obj) => {    
    var points = 0;
    for (const stat in obj) {
        if (!isNaN(obj[stat])) {
            switch (stat) {
                case STATS.VIT:
                case STATS.STR:
                    points += obj[stat]*2;
                    break;
                case STATS.ATT:
                case STATS.DEF:
                    points += parseInt(obj[stat]);
                    break;
                case STATS.INT:
                    points -= obj[stat]
                    break;
                default:
                    points++
                    break;
            }
        }
    }
    switch (true) {
        case points >= 21:
            return CLASSES.PALADIN;
        case points >= 18:
            return CLASSES.BARBARIAN;
        case points >= 15:
            return CLASSES.FIGHTER;
        case points >= 13:
            return CLASSES.CLERIC;
        case points < 13:
            return CLASSES.MAGE;
        default:
            return CLASSES.FIGHTER;
    }

}