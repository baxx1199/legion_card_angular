export interface Creature {
    
    /* A creature must have the main stats greater than or equal to zero but never less */
    name:String;
    faction:String;
    
    pts_Defense:Number;
    pts_Health:Number;
    pts_Speed:Number;
    pts_Attack:Number;
    accuracy:Number;
    spell_Uses:Number;
    special_Attacks:String[];

    
}
