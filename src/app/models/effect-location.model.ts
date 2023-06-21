import { Attack } from "./attack.model";
import { Effect } from "./effect.model";


export interface EffectLocation  {

    /* The effect location has affected to multiple creatures, one or zero */
    
    description:String; //that description only is semantic don't has function
    id_creature_Affected:String[]; //In this matrix must be stored the reference ID of the creatures, which are affected; independently if the effect is positive or negative 
    
    effect_apply:Effect[];
    attack_granted:Attack[];
    id_attack_discovered:String[];
    id_Attack_banned:String[];
    id_Spell_Discovered:String[];
    id_Spell_Banned:String[];
    id_attack_Boosted:String[];
    id_Attack_weakened:String[];
    id_Spell_Boosted:String[];
    id_Spell_weakened:String[];

}
