import {Building, BuildingNames, BuildingRarity, BuildingType} from "../../Building";
import {Buff, BuffRange} from "../../Buff";

class ConvenienceStore extends Building{
    constructor(){
        super(BuildingNames.ConvenienceStore,BuildingRarity.Common,BuildingType.Business,1);
        this.initBuffs();
    }

    initBuffs(){
        this.buffs.push(new Buff(BuffRange.Targets,BuildingNames.Residential,1));
    }
}

export default ConvenienceStore