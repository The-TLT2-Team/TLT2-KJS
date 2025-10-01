ServerEvents.recipes(event=>{
    function metalMaterial([materialId,fluid,ingot,temp]){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function customMaterial([ materialId,fluid,ingot,fluidAmount,fluidPerItem,itemCount,temp]){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": fluidPerItem
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": fluidAmount
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": fluidAmount
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": itemCount,
                "material": materialId
            }
        )
    }
    function metalMaterialNoIngotMelt(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    function metalMaterialNoNuggetMelt([materialId,fluid,ingot,temp]){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 10
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 10
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function craftableMaterial([materialId,ingred_item]){
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingred_item
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    metalMaterial(["tlt_tech:restructure_chromatic_steel","kubejs:molten_restructure_chromatic_steel","kubejs:restructure_chromatic_steel",7650])
    metalMaterial(["tlt_tech:awaken_chromatic_steel","kubejs:molten_awaken_chromatic_steel","kubejs:awaken_chromatic_steel",16384])
    craftableMaterial(["tlt_tech:compressed_chromatic_steel","kubejs:compressed_chromatic_steel"])
    craftableMaterial(["tlt_tech:pneumatic_reinforced_titanium","kubejs:pneumatic_reinforced_titanium"])
    metalMaterial(["kubejs:hephaestus","kubejs:molten_hephaestus","kubejs:hephaestus_ingot",7995])
    craftableMaterial(["kubejs:orechidysprosium","kubejs:orechidysprosium"])
    craftableMaterial(["kubejs:reinforced_plate","create:sturdy_sheet"])
})


function headStat(durability, melee_attack, mining_speed, mining_tier){
    var headStat = {};
    headStat["durability"] = durability;
    headStat["melee_attack"] = melee_attack;
    headStat["mining_speed"] = mining_speed;
    headStat["mining_tier"] = mining_tier;
    return headStat;
}
function handleStat(durability, melee_damage, mining_speed, melee_speed){
    return {
        "durability": durability,
        "mining_speed": mining_speed,
        "melee_speed": melee_speed,
        "melee_damage": melee_damage
    }
}
function statlessStat(){
    return {}
}
function limbStat(durability,draw_speed,velocity,accuracy){
    return {
        "durability": durability,
        "draw_speed": draw_speed,
        "velocity": velocity,
        "accuracy": accuracy
    }
}
function gripStat(accuracy,durability,melee_damage){
    return {
        "accuracy": accuracy,
        "durability": durability,
        "melee_damage": melee_damage
    }
}
function platingStat(armor,durability,knockback_resistance,toughness){
    return {
        "armor": armor,
        "durability": durability,
        "knockback_resistance": knockback_resistance,
        "toughness": toughness
    }
}
function platingShieldStat(durability,knockback_resistance){
    return {
        "durability": durability,
        "knockback_resistance": knockback_resistance
    }
}
function charmChainStat(movement_speed,health,armor,toughness,damage,arrow_damage){
    return {
        "movement_speed": movement_speed,
        "health": health,
        "armor": armor,
        "toughness": toughness,
        "damage": damage,
        "arrow_damage": arrow_damage
    }
}
function energyUnitStat(energy_storage,durability){
    return {
        "energy_storage": energy_storage,
        "durability": durability
    }
}
function laserMediumStat(range,cooldown){
    return {
        "range": range,
        "cooldown": cooldown
    }
}
function flagStat(range,attack_buff_time,defence_buff_time,charge_time){
    return {
        "range": range,
        "attack_buff_time": attack_buff_time,
        "defence_buff_time": defence_buff_time,
        "charge_time": charge_time
    }
}
function fluxCoreStat(capacity,generate){
    return {
        "capacity": capacity,
        "generate": generate
    }
}
/**
* @enum {String}
*/
const MaterialStatIds = {
    HEAD:"tconstruct:head",
    HANDLE:"tconstruct:handle",
    LIMB:"tconstruct:limb",
    GRIP:"tconstruct:grip",
    PLATING_HELMET:"tconstruct:plating_helmet",
    PLATING_CHESTPLATE:"tconstruct:plating_chestplate",
    PLATING_LEGGINS:"tconstruct:plating_leggings",
    PLATING_BOOTS:"tconstruct:plating_boots",
    PLATING_SHIELD:"tconstruct:plating_shield",
    CHARM_CHAIN:"sakuratinker:charm_chain",
    ENERGY_UNIT:"sakuratinker:energy_unit",
    LASER_MEDIUM:"sakuratinker:laser_medium",
    FLAG:"sakuratinker:flag",
    FLUXCORE:"tinkers_advanced:flux_core"
}
/**
* @enum {String}
*/
const StatlessStatIds = {
    MAILLE:"tconstruct:maille",
    BOW_STRING:"tconstruct:bowstring",
    SHIELD_CORE:"tconstruct:shield_core",
    BINDING:"tconstruct:binding",
    CHARM_CORE:"sakuratinker:charm_core",
}
/**
* @enum {String}
*/
const MaterialTypes = {
    MELEE:"tconstruct:melee_harvest",
    RANGED:"tconstruct:ranged",
    ARMOR:"tconstruct:armor",
    LASER_GUN:"sakuratinker:laser_gun",
    CHARM:"sakuratinker:charm",
    POWERBANK:"sakuratinker:power_bank",
    BATTLE_FLAG:"sakuratinker:battle_flag"
}
/**
* @enum {String}
*/
const MiningTiers = {
    WOOD:"minecraft:wood",
    STONE:"minecraft:stone",
    IRON:"minecraft:iron",
    DIAMOND:"minecraft:diamond",
    NETHERITE:"minecraft:netherite",
    INFINITY:"sakuratinker:infinity"
}
ServerEvents.highPriorityData(event=>{
    function buildMaterial(nameSpace,id) {
        const defBuilder = {
            def: {
                "craftable": false,
                "hidden": false,
                "sortOrder": 0,
                "tier": 1
            },
            setCraftable(){
                this.def["craftable"] = true;
                return this;
            },
            setHidden(){
                this.def["hidden"] = true;
                return this;
            },
            setTier(tier){
                this.def["tier"] = tier;
                return this;
            },
            setSortOrder(order){
                this.def["sortOrder"] = order;
                return this;
            },
            build(){
                event.addJson(nameSpace+':tinkering/materials/definition/'+id,this.def)
                return statBuilder;
            }
        }
        const statBuilder = {
            stats: {},
            addStat(statId,stat){
                this.stats[statId] = stat;
                return this;
            },
            addStatlessStat(statId){
                this.stats[statId] = statlessStat();
                return this;
            },
            build(){
                event.addJson(nameSpace+':tinkering/materials/stats/'+id,{"stats":this.stats})
                return traitBuilder;
            }
        }
        const traitBuilder = {
            default:[],
            perstat:{},
            addDefault(modifierId,level){
                var entry = {};
                entry["level"] = level;
                entry["name"] = modifierId;
                this.default.push(entry);
                return this;
            },
            buildPerstat(statType){
                this.perstatBuilder.entries = [];
                this.perstatBuilder.statType = statType;
                return this.perstatBuilder;
            },
            perstatBuilder: {
                statType:"",
                entries:[],
                addModifier(modifierId,level){
                    var entry = {};
                    entry["level"] = level;
                    entry["name"] = modifierId;
                    this.entries.push(entry)
                    return this
                },
                build(){
                    traitBuilder.perstat[this.statType] = this.entries;
                    return traitBuilder;
                }
            },
            build(){
                event.addJson(nameSpace+':tinkering/materials/traits/'+id,{"default":this.default,"perStat":this.perstat})
            }
        }
        return defBuilder;
    }

    
    
    buildMaterial('kubejs','hephaestus').setTier(8).build()
    .addStat(MaterialStatIds.HEAD,headStat(10000,16,16,MiningTiers.INFINITY))
    .addStat(MaterialStatIds.HANDLE,handleStat(1.5,1.5,1.5,1.5))
    .addStat(MaterialStatIds.GRIP,gripStat(1,1.5,16))
    .addStat(MaterialStatIds.LIMB,limbStat(10000,1.5,1.5,1))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(16,10000,1,16))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(24,15000,1,16))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(30,20000,1,16))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(12,12000,1,16))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tltmod:ever_flaming_core",1)
    .buildPerstat(MaterialTypes.MELEE).addModifier("tltmod:ever_flaming_core",1).addModifier("tltmod:stop",1).build()
    .build()

    buildMaterial('kubejs','orechidysprosium').setTier(5).setCraftable().build()
    .addStat(MaterialStatIds.HEAD,headStat(790,6,12,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.9,0.25,0.5,0.3))
    .addStat(MaterialStatIds.GRIP,gripStat(0.05,0.9,6))
    .addStat(MaterialStatIds.LIMB,limbStat(690,0.3,0.3,0.05))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(3,675,0,2))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(5,795,0,2))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(7,875,0,2))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(4,722,0,2))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tlt_tech:magical_ores",1).addDefault("tlt_tech:ore_capture",1).addDefault("etstlib:mana_repair",1)
    .buildPerstat(MaterialTypes.ARMOR).addModifier("tlt_tech:ore_resonance",1).addModifier("etstlib:mana_repair",2).build()
    .build()
    
    buildMaterial('kubejs','reinforced_plate').setTier(4).setCraftable().build()
    .addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tltmod:heat_tendency",1).addDefault("tltmod:reinforced",1).build()


})
