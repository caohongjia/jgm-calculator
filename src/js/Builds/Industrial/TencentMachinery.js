import {Building, BuildingNames, BuildingRarity, BuildingType} from "../../Building";
import {Buff, BuffRange} from "../../Buff";

class TencentMachinery extends Building{
    constructor(){
        super(BuildingNames.TencentMachinery,BuildingRarity.Legendary,BuildingType.Industrial,1.33);
        this.initBuffs();
    }

    initBuffs(){
        this.buffs.push(new Buff(BuffRange.Targets,BuildingNames.PartsFactory,1));
        this.buffs.push(new Buff(BuffRange.Global,BuffRange.Global,0.1));
    }
}

export default TencentMachinery