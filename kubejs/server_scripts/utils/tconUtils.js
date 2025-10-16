
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//材料注册部分

//材料属性构建
//顶端属性
function headStat(durability, melee_attack, mining_speed, mining_tier){
    var headStat = {};
    headStat["durability"] = durability;
    headStat["melee_attack"] = melee_attack;
    headStat["mining_speed"] = mining_speed;
    headStat["mining_tier"] = mining_tier;
    return headStat;
}
//手柄属性
function handleStat(durability, melee_damage, mining_speed, melee_speed){
    return {
        "durability": durability,
        "mining_speed": mining_speed,
        "melee_speed": melee_speed,
        "melee_damage": melee_damage
    }
}
//无属性部件属性
function statlessStat(){
    return {}
}
//弓臂属性
function limbStat(durability,draw_speed,velocity,accuracy){
    return {
        "durability": durability,
        "draw_speed": draw_speed,
        "velocity": velocity,
        "accuracy": accuracy
    }
}
//弓把属性
function gripStat(accuracy,durability,melee_damage){
    return {
        "accuracy": accuracy,
        "durability": durability,
        "melee_damage": melee_damage
    }
}
//镶板属性
function platingStat(armor,durability,knockback_resistance,toughness){
    return {
        "armor": armor,
        "durability": durability,
        "knockback_resistance": knockback_resistance,
        "toughness": toughness
    }
}
//镶板盾牌属性
function platingShieldStat(durability,knockback_resistance){
    return {
        "durability": durability,
        "knockback_resistance": knockback_resistance
    }
}
//护符项链属性
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
//能量单元属性
function energyUnitStat(energy_storage,durability){
    return {
        "energy_storage": energy_storage,
        "durability": durability
    }
}
//激光传导器属性
function laserMediumStat(range,cooldown){
    return {
        "range": range,
        "cooldown": cooldown
    }
}
//战旗属性
function flagStat(range,attack_buff_time,defence_buff_time,charge_time){
    return {
        "range": range,
        "attack_buff_time": attack_buff_time,
        "defence_buff_time": defence_buff_time,
        "charge_time": charge_time
    }
}
//通量核心属性
function fluxCoreStat(capacity,generate){
    return {
        "capacity": capacity,
        "generate": generate
    }
}
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//部件类型ID

//常规部件
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
//无属性部件
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
//广泛材料类型
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
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//挖掘等级
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

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//槽位类型
/**
* @enum {String}
*/
const SlotTypes = {
    UPGRADES:"upgrades",
    ABILITIES:"abilities",
    DEFENSE:"defense",
    SOUL:"soul",
    MANA:"tltmod_mana"
}

//—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//函数部分
//创建词条配方的函数，返回一个配方构建器。
function buildModifierRecipe(modifierId,event) {
    //词条配方构建器
    const recipeBuilder={
        allowCrystal:false,
        checkTrait:false,
        slots:{},
        constantLevel:false,
        exactLevel:0,
        level:{},
        inputs:[],
        tools:[],
        //设置允许用强化水晶打上去
        setAllowCrystal(){
            this.allowCrystal = true;
            return this;
        },
        //设置强化等级要求会检查材料特性等级
        setCheckTraitLevel(){
            this.checkTrait = true;
            return this;
        },
        //添加消耗的槽位
        addSlot(slotType,count){
            this.slots[slotType] = count;
            return this;
        },
        //设置固定等级
        setLevel(level){
            this.constantLevel = true;
            this.exactLevel = level;
            return this;
        },
        //设置等级区间
        setLevelRange(min,max){
            this.constantLevel = false;
            if (min>0){
                this.level["min"] = min;
            }
            this.level["max"] = max;
            return this;
        },
        //添加工具tag
        addToolTag(tag){
            this.tools.push(
                {"tag":tag}
            );
            return this;
        },
        //添加工具物品
        addTool(item){
            this.tools.push(
                {"item":item}
            );
            return this;
        },
        //添加原料tag
        addInputTag(tag,count){
            this.inputs.push(
                {
                    "tag":tag,
                    "amount_needed":count
                }
            );
            return this;
        },
        //添加原料物品
        addInput(item,count){
            this.inputs.push(
                {
                    "item":item,
                    "amount_needed":count
                }
            );
            return this;
        },
        //创建强化配方
        buildRecipe(){
            if (this.constantLevel){
                event.custom(
                {
                    "type": "tconstruct:modifier",
                    "allow_crystal":this.allowCrystal,
                    "check_trait_level":this.checkTrait,
                    "inputs":this.inputs,
                    "level":this.exactLevel,
                    "result":modifierId,
                    "slots":this.slots,
                    "tools":this.tools
                }
                );
            } else {
                event.custom(
                {
                    "type": "tconstruct:modifier",
                    "allow_crystal":this.allowCrystal,
                    "check_trait_level":this.checkTrait,
                    "inputs":this.inputs,
                    "level":this.level,
                    "result":modifierId,
                    "slots":this.slots,
                    "tools":this.tools
                }
                );
            }
            
            return this;
        },
        //创建强化提取配方
        buildSalvage(){
            if (this.constantLevel){
                event.custom(
                {
                    "type": "tconstruct:modifier_salvage",
                    "modifier":modifierId,
                    "slots":this.slots,
                    "level":this.exactLevel,
                    "tools":this.tools
                }
            );
            } else {
                event.custom(
                {
                    "type": "tconstruct:modifier_salvage",
                    "modifier":modifierId,
                    "slots":this.slots,
                    "tools":this.tools
                }
                );
            }
            return this;
        }
    }
    return recipeBuilder;
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//材料配方部分
let recipeEvent;
function setRecipeEvent(event){
    recipeEvent = event;
}
    /*
        金属材料配方
        materialId - 材料ID
        fluid - 流体ID
        ingot - 材料物品ID
        temp - 熔化温度
    */
    function metalMaterial([materialId,fluid,ingot,temp]){
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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

    /*
        有现存熔融物的金属材料配方
        materialId - 材料ID
        fluid - 流体ID
        ingot - 材料物品ID
        temp - 熔化温度
    */
    function metalMaterialExistingMolten([materialId,fluid,ingot,temp]){
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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

    /*
        自定义材料配方
        materialId - 材料ID
        fluid - 流体ID
        ingot - 材料物品ID
        fluidAmount - 一单位材料熔化出多少流体
        fluidPerItem - 一个物品熔化出多少流体
        itemCount - 多少物品提供一单位材料
        temp - 熔化温度
    */
    function customMaterial([ materialId,fluid,ingot,fluidAmount,fluidPerItem,itemCount,temp]){
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
        recipeEvent.custom(
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
    /*
        手搓材料配方
        materialId - 材料ID
        ingred_item - 材料物品ID
    */
    function craftableMaterial([materialId,ingred_item]){
        recipeEvent.custom(
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
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//材料注册部分
let dataEvent;
function setDataEvent(event){
    dataEvent = event;
}
    //材料构建器
    //创建一个新的材料，返回defBuilder
    function buildMaterial(nameSpace,id) {
        //定义构建器
        const defBuilder = {
            def: {
                "craftable": false,
                "hidden": false,
                "sortOrder": 0,
                "tier": 1
            },
            //设置成可手搓
            setCraftable(){
                this.def["craftable"] = true;
                return this;
            },
            //设置成隐藏材料
            setHidden(){
                this.def["hidden"] = true;
                return this;
            },
            //设置等级
            setTier(tier){
                this.def["tier"] = tier;
                return this;
            },
            //设置排序顺序
            setSortOrder(order){
                this.def["sortOrder"] = order;
                return this;
            },
            //完成定义构建
            //返回一个属性构建器进行下一步操作
            build(){
                dataEvent.addJson(nameSpace+':tinkering/materials/definition/'+id,this.def)
                return statBuilder;
            }
        }
        //属性构建器
        const statBuilder = {
            stats: {},
            //添加属性
            //stat参数使用材料属性构建
            addStat(statId,stat){
                this.stats[statId] = stat;
                return this;
            },
            //添加无属性部件属性
            addStatlessStat(statId){
                this.stats[statId] = statlessStat();
                return this;
            },
            //完成属性构建
            //返回一个词条构建器进行下一步操作
            build(){
                dataEvent.addJson(nameSpace+':tinkering/materials/stats/'+id,{"stats":this.stats})
                return traitBuilder;
            }
        }
        //词条构建器
        const traitBuilder = {
            default:[],
            perstat:{},
            //添加默认词条
            addDefault(modifierId,level){
                var entry = {};
                entry["level"] = level;
                entry["name"] = modifierId;
                this.default.push(entry);
                return this;
            },
            //构建部件词条
            //在返回的部件词条构建器中操作
            buildPerstat(statType){
                this.perstatBuilder.entries = [];
                this.perstatBuilder.statType = statType;
                return this.perstatBuilder;
            },
            //部件词条构建器
            perstatBuilder: {
                statType:"",
                entries:[],
                //添加词条
                addModifier(modifierId,level){
                    var entry = {};
                    entry["level"] = level;
                    entry["name"] = modifierId;
                    this.entries.push(entry)
                    return this
                },
                //完成部件词条构建
                //返回上级的词条构建器进行下一步操作
                build(){
                    traitBuilder.perstat[this.statType] = this.entries;
                    return traitBuilder;
                }
            },
            //完成词条构建器，结束材料注册
            build(){
                dataEvent.addJson(nameSpace+':tinkering/materials/traits/'+id,{"default":this.default,"perStat":this.perstat})
            }
        }
        return defBuilder;
    }