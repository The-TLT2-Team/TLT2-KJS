ServerEvents.recipes(event=>{
    //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    //材料配方部分

    /*
        金属材料配方
        materialId - 材料ID
        fluid - 流体ID
        ingot - 材料物品ID
        temp - 熔化温度
    */
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

    /*
        有现存熔融物的金属材料配方
        materialId - 材料ID
        fluid - 流体ID
        ingot - 材料物品ID
        temp - 熔化温度
    */
    function metalMaterialExistingMolten([materialId,fluid,ingot,temp]){
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
    /*
        手搓材料配方
        materialId - 材料ID
        ingred_item - 材料物品ID
    */
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

    //重组彩钢
    metalMaterial(["tlt_tech:restructure_chromatic_steel","kubejs:molten_restructure_chromatic_steel","kubejs:restructure_chromatic_steel",7650])
    //觉醒彩钢
    metalMaterial(["tlt_tech:awaken_chromatic_steel","kubejs:molten_awaken_chromatic_steel","kubejs:awaken_chromatic_steel",16384])
    //高压彩钢
    craftableMaterial(["tlt_tech:compressed_chromatic_steel","kubejs:compressed_chromatic_steel"])
    //气锻复合钛
    craftableMaterial(["tlt_tech:pneumatic_reinforced_titanium","kubejs:pneumatic_reinforced_titanium"])
    //神匠
    metalMaterial(["kubejs:hephaestus","kubejs:molten_hephaestus","kubejs:hephaestus_ingot",7995])
    //凝矿镧
    craftableMaterial(["kubejs:orechidysprosium","kubejs:orechidysprosium"])
    //坚固板
    craftableMaterial(["kubejs:reinforced_plate","create:sturdy_sheet"])
    //红石琥珀金
    craftableMaterial(["kubejs:fluxed_electrum","redstone_arsenal:flux_plating"])
    //精灵钢
    craftableMaterial(["kubejs:alfsteel","mythicbotany:alfsteel_ingot"])
    //热力三锭
    metalMaterialExistingMolten(["kubejs:signalum","tconstruct:molten_signalum","thermal:signalum_ingot",999])
    metalMaterialExistingMolten(["kubejs:lumium","tconstruct:molten_lumium","thermal:lumium_ingot",1050])
    metalMaterialExistingMolten(["kubejs:enderium","tconstruct:molten_enderium","thermal:enderium_ingot",1350])
    //HOP石墨
    craftableMaterial(["kubejs:hop_graphite","immersiveengineering:ingot_hop_graphite"])
    //工程塑胶板
    craftableMaterial(["kubejs:duroplast","immersiveengineering:plate_duroplast"])
    //热核合金
    craftableMaterial(["kubejs:alloy_thermalnuclear","mekanism_extras:alloy_thermonuclear"])
    //辐光合金
    craftableMaterial(["kubejs:alloy_radiance","mekanism_extras:alloy_radiance"])
})

ServerEvents.highPriorityData(event=>{
    //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    //代码部分

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
                event.addJson(nameSpace+':tinkering/materials/definition/'+id,this.def)
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
                event.addJson(nameSpace+':tinkering/materials/stats/'+id,{"stats":this.stats})
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
                event.addJson(nameSpace+':tinkering/materials/traits/'+id,{"default":this.default,"perStat":this.perstat})
            }
        }
        return defBuilder;
    }

    
    //神匠
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

    //凝矿镧
    buildMaterial('kubejs','orechidysprosium').setTier(5).setCraftable().build()
    .addStat(MaterialStatIds.HEAD,headStat(790,6,12,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.9,0.25,0.5,0.3))
    .addStat(MaterialStatIds.GRIP,gripStat(0.05,0.9,6))
    .addStat(MaterialStatIds.LIMB,limbStat(690,0.3,0.3,0.05))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(3,675,0,2))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(6,795,0,2))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(8,875,0,2))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(4,722,0,2))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tlt_tech:magical_ores",1).addDefault("tlt_tech:ore_capture",1).addDefault("etstlib:mana_repair",1)
    .buildPerstat(MaterialTypes.ARMOR).addModifier("tlt_tech:ore_resonance",1).addModifier("etstlib:mana_repair",2).build()
    .build()
    
    //坚固板
    buildMaterial('kubejs','reinforced_plate').setTier(4).setCraftable().build()
    .addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tltmod:heat_tendency",1).addDefault("tltmod:reinforced",1)
    .build()

    //红石琥珀金
    buildMaterial('kubejs','fluxed_electrum').setTier(5).setCraftable().build()
    .addStat(MaterialStatIds.HEAD,headStat(1020,5.75,7.5,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.2,0.25,0.2,0.25))
    .addStat(MaterialStatIds.GRIP,gripStat(0.0,0.2,5.75))
    .addStat(MaterialStatIds.LIMB,limbStat(1020,0.25,0.25,0.0))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(2.75,775,0.05,2))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(5,809,0.05,2))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(7,900,0.05,2))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(3.75,735,0.05,2))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(9.2,9.8))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .buildPerstat(MaterialTypes.MELEE).addModifier("etstlib:energy_loaded",1).addModifier("tlt_tech:flux_slash",1).build()
    .buildPerstat(MaterialTypes.RANGED).addModifier("etstlib:energy_loaded",1).addModifier("tlt_tech:flux_infinity",1).build()
    .buildPerstat(MaterialTypes.ARMOR).addModifier("etstlib:energy_loaded",2).addModifier("tlt_tech:flux_blocking",1).build()
    .build()

    //活化彩钢调整
    buildMaterial('tinkers_advanced','activated_chromatic_steel').setTier(5).build()
    .addStat(MaterialStatIds.HEAD,headStat(1920,6.25,9,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.3,0.5,0.3,0.25))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(22.4,23.9))
    .addStat(MaterialStatIds.LIMB,limbStat(1920,0.25,0.5,0.1)).build()

    //精灵钢
    buildMaterial('kubejs','alfsteel').setTier(5).setCraftable().build()
    .addStat(MaterialStatIds.HEAD,headStat(670,5.75,6,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.2,0.45,0.1,0.2))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(3,644,0,3))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(5.5,768,0,3))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(7.5,845,1,3))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(3,700,0,3))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tlt_tech:alf_bless",1).addDefault("etstlib:mana_repair",1)
    .buildPerstat(MaterialTypes.MELEE).addModifier("tltmod:alf_burst",1).addModifier("tlt_tech:alf_bless",1).addModifier("etstlib:mana_repair",1).build()
    .build()

    //热力三锭
    buildMaterial('kubejs','signalum').setTier(3).build()
    .addStat(MaterialStatIds.HEAD,headStat(755,3,7.5,MiningTiers.DIAMOND))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.15,0.15,0.1,-0.2))
    .addStat(MaterialStatIds.LIMB,limbStat(755,-0.2,0.1,0.1))
    .addStat(MaterialStatIds.GRIP,gripStat(0.05,0.15,3))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(5.2,3.8))
    .addStatlessStat(StatlessStatIds.BINDING).build()
    .addDefault("etstlib:short_circuit",1)
    .build()
    buildMaterial('kubejs','lumium').setTier(4).build()
    .addStat(MaterialStatIds.HEAD,headStat(470,2.5,2.5,MiningTiers.DIAMOND))
    .addStat(MaterialStatIds.HANDLE,handleStat(-0.15,-0.15,-0.1,0.3))
    .addStat(MaterialStatIds.LIMB,limbStat(470,0.3,-0.1,-0.05))
    .addStat(MaterialStatIds.GRIP,gripStat(0.05,-0.1,2.5))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(1.25,300,0,2))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(4.75,467,0,2))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(5.75,490,0,2))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(1.75,368,0,2))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(3.9,6.1))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("etstlib:glowing",1).addDefault("tconstruct:enhanced",1)
    .build()
    buildMaterial('kubejs','enderium').setTier(4).build()
    .addStat(MaterialStatIds.HEAD,headStat(1170,5,5,MiningTiers.DIAMOND))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.25,0.25,0.25,0.25))
    .addStat(MaterialStatIds.LIMB,limbStat(1170,0.25,0.25,-0.05))
    .addStat(MaterialStatIds.GRIP,gripStat(0.25,0.25,5))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(3,980,0.05,5))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(5,1159,0.05,5))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(7,1270,0.05,5))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(3,925,0.05,5))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(5.5,5.5))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("tconstruct:enderference",1)
    .buildPerstat(MaterialTypes.ARMOR).addModifier("tinkerscalibration:enderference_armor",1).build()
    .build()

    //高定向热解石墨
    buildMaterial('kubejs','hop_graphite').setCraftable().setTier(5).build()
    .addStat(MaterialStatIds.HEAD,headStat(590,5.25,2.5,MiningTiers.WOOD))
    .addStat(MaterialStatIds.HANDLE,handleStat(-0.25,0.15,-0.25,0.75))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(15.5,15.5))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.BOW_STRING).build()
    .addDefault("etstlib:short_circuit",1).addDefault("tconstruct:lightweight",2).addDefault("mushroom_concept:bloody_mary",1)
    .build()

    //辐光合金
    buildMaterial('kubejs','alloy_radiance').setTier(4).setCraftable().build()
    .addStat(MaterialStatIds.HEAD,headStat(995,6,7,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.3,0.5,0.3,0.3))
    .addStat(MaterialStatIds.LIMB,limbStat(995,0.3,0.5,0.05))
    .addStat(MaterialStatIds.GRIP,gripStat(0.05,0.3,6))
    .addStat(MaterialStatIds.PLATING_BOOTS,platingStat(4,880,0.1,6))
    .addStat(MaterialStatIds.PLATING_LEGGINS,platingStat(6,1059,0.1,6))
    .addStat(MaterialStatIds.PLATING_CHESTPLATE,platingStat(8,1170,0.1,6))
    .addStat(MaterialStatIds.PLATING_HELMET,platingStat(4,825,0.1,6))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.MAILLE).addStatlessStat(StatlessStatIds.SHIELD_CORE).build()
    .addDefault("etstlib:radiation_inflict",1)
    .buildPerstat(MaterialTypes.ARMOR).addModifier("etstlib:radiation_shielding",2).build()
    .build()

    //热核合金
    buildMaterial('kubejs','alloy_thermalnuclear').setCraftable().setTier(6).build()
    .addStat(MaterialStatIds.HEAD,headStat(2049,7.25,16384,MiningTiers.NETHERITE))
    .addStat(MaterialStatIds.HANDLE,handleStat(1,1,20.48,0))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(69.5,69.5))
    .addStatlessStat(StatlessStatIds.BINDING).build()
    .addDefault("tlt_tech:molten_core",1)
    .build()

    //工程塑胶板
    buildMaterial('kubejs','duroplast').setCraftable().setTier(5).build()
    .addStat(MaterialStatIds.HEAD,headStat(590,7.25,2.5,MiningTiers.WOOD))
    .addStat(MaterialStatIds.HANDLE,handleStat(0.1,0.75,-0.1,0.75))
    .addStat(MaterialStatIds.FLUXCORE,fluxCoreStat(99.5,25.5))
    .addStatlessStat(StatlessStatIds.BINDING).addStatlessStat(StatlessStatIds.BOW_STRING).build()
    .addDefault("tconstruct:lightweight",2).addDefault("tinkers_advanced:metamorphium",1).addDefault("tlt_tech:industrial_born",1)
    .build()

})
