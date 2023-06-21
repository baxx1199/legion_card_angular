import { Effect } from "./effect.model"

export interface Attack {
    id_attack:String;
    pts_Damage:Number;
    description:String;
    effect: Effect;
}
