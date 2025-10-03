//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//部件类型ID，决定了这个材料会生成哪些类型的部件的贴图
/**
* @enum {String}
*/
const RangedStatIds = {
    BOW_STRING:"tconstruct:bowstring",
    LIMB:"tconstruct:limb",
    GRIP:"tconstruct:grip",
}
/**
* @enum {String}
*/
const MeleeStatIds = {
    HEAD:"tconstruct:head",
    HANDLE:"tconstruct:handle",
    BINDING:"tconstruct:binding",
}
/**
* @enum {String}
*/
const ArmorStatIds = {
    PLATING_HELMET:"tconstruct:plating_helmet",
    PLATING_CHESTPLATE:"tconstruct:plating_chestplate",
    PLATING_LEGGINS:"tconstruct:plating_leggings",
    PLATING_BOOTS:"tconstruct:plating_boots",
    PLATING_SHIELD:"tconstruct:plating_shield",
    SHIELD_CORE:"tconstruct:shield_core",
    MAILLE:"tconstruct:maille",
    ARMOR_MAILLE:"tconstruct:armor_maille"
}
/**
* @enum {String}
*/
const MiscStatIds = {
    CHARM_CORE:"sakuratinker:charm_core",
    CHARM_CHAIN:"sakuratinker:charm_chain",
    FLAG:"sakuratinker:flag",
}
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//fallback类型，决定了材料的纹理方案

/**
* @enum {String}
*/
const FallBacks = {
    METAL:"metal",
    CRYSTAL:"crystal",
    ROCK:"rock",
    STICK:"stick",
    BONE:"bone"
}
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//材料上色部分，addColor用于颜色上色，addPath用于底图上色（path填底图路径）
function addColor(grey,color){
    return {
        "color": color,
        "grey": grey
    }
}
function addPath(grey,path) {
    return {
        "grey": grey,
        "path": path
    }
}

//代码部分
ClientEvents.highPriorityAssets(event=>{
    //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    //创建材料的函数，namespace为modid，id为材料名。会返回一个renderInfoBuilder便于进行链式调用。
    function buildMaterial(nameSpace,id){
        const renderInfoBuilder = {
            color:"000000",
            fallbacks:[],
            luminosity:0,
            supportedStats:[],

            // 设置材料的光度，最大15
            // 高光度材料在暗处看起来会更明亮
            setLuminosity:(luminosity)=>{
                renderInfoBuilder.luminosity = luminosity;
                return renderInfoBuilder
            },

            // 设置颜色
            // 没生成材料贴图时的默认颜色，会按匠魂默认的梯度渲染材料
            setColor:(color)=>{
                renderInfoBuilder.color = color;
                return renderInfoBuilder
            },

            // 添加部件类型ID
            addStat:(stat) =>{
                renderInfoBuilder.supportedStats.push(stat);
                return renderInfoBuilder;
            },
            // 添加全部近战部件类型
            addMelee:()=>{
                renderInfoBuilder.supportedStats.push(
                    MeleeStatIds.BINDING,
                    MeleeStatIds.HANDLE,
                    MeleeStatIds.HEAD
                )
                return renderInfoBuilder;
            },
            // 添加全部远程类型
            addRanged:()=>{
                renderInfoBuilder.supportedStats.push(
                    RangedStatIds.BOW_STRING,
                    RangedStatIds.GRIP,
                    RangedStatIds.LIMB
                )
                return renderInfoBuilder;
            },
            //添加全部护甲类型
            addArmor:()=>{
                renderInfoBuilder.supportedStats.push(
                    ArmorStatIds.ARMOR_MAILLE,
                    ArmorStatIds.MAILLE,
                    ArmorStatIds.PLATING_BOOTS,
                    ArmorStatIds.PLATING_CHESTPLATE,
                    ArmorStatIds.PLATING_HELMET,
                    ArmorStatIds.PLATING_LEGGINS,
                    ArmorStatIds.SHIELD_CORE,
                    ArmorStatIds.PLATING_SHIELD
                )
                return renderInfoBuilder;
            },
            //添加fallback类型
            addFallBack:(fallback)=>{
                renderInfoBuilder.fallbacks.push(fallback);
                return renderInfoBuilder;
            },

            //开始构建部件贴图生成器
            //需要梯度上色的材料才使用此函数，返回一个transformerBuilder
            buildTransformer(){
                return transformerBuilder;
            },
            //直接构建渲染信息
            //对于不需要梯度上色的材料，用这个函数就行了
            build:()=>{
                event.add(nameSpace+':tinkering/materials/'+id,{
                    "color":renderInfoBuilder.color,
                    "fallbacks":renderInfoBuilder.fallbacks,
                    "luminosity":renderInfoBuilder.luminosity,
                })
            }
        }
        // 材料贴图生成器部分
        const transformerBuilder = {
                    palette:[],
                    transformer:{},
                    // 创建一个灰度上色生成器
                    buildResprite:()=>{
                        const respriteBuilder = {
                            //添加上色灰度，用addColor（颜色）或addPath（贴图）方法填充参数（参考神匠/凝矿兰）
                            addPalette:(palette)=> {
                                transformerBuilder.palette.push(palette)
                                return respriteBuilder;
                            },
                            //彻底完成材料贴图生成器
                            build:()=>{
                                transformerBuilder.transformer = {
                                    "type": "tconstruct:grey_to_sprite",
                                    "palette": transformerBuilder.palette
                                }
                                event.add(nameSpace+':tinkering/materials/'+id,{
                                    "color":renderInfoBuilder.color,
                                    "fallbacks":renderInfoBuilder.fallbacks,
                                    "luminosity":renderInfoBuilder.luminosity,
                                    "generator": {
                                        "supported_stats":renderInfoBuilder.supportedStats,
                                        "transformer":transformerBuilder.transformer
                                    }
                                })
                            }
                        }
                        return respriteBuilder;
                    }
                }
        return renderInfoBuilder;
    }
    //————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    //实际的材料添加

    //神匠
    buildMaterial('kubejs','hephaestus').addArmor().addMelee().addRanged().addFallBack(FallBacks.METAL).setLuminosity(15).setColor("FF555555").buildTransformer()
    .buildResprite()
    .addPalette(addColor(0,"FF000000"))
    .addPalette(addPath(63,"kubejs:materials/hephaestus_dark"))
    .addPalette(addPath(102,"kubejs:materials/hephaestus_dark"))
    .addPalette(addPath(140,"kubejs:materials/hephaestus_lightest"))
    .addPalette(addPath(178,"kubejs:materials/hephaestus_extra_light"))
    .addPalette(addPath(216,"kubejs:materials/hephaestus_light"))
    .addPalette(addPath(255,"kubejs:materials/hephaestus_medium"))
    .build()

    //凝矿镧
    buildMaterial('kubejs','orechidysprosium').addArmor().addMelee().addRanged().addFallBack(FallBacks.METAL).setColor("FFE3E091").buildTransformer()
    .buildResprite()
    .addPalette(addColor(0,"FF000000"))
    .addPalette(addColor(63,"FF4A4025"))
    .addPalette(addColor(102,"FF857137"))
    .addPalette(addColor(140,"FFA1925E"))
    .addPalette(addColor(178,"FFC2A58D"))
    .addPalette(addColor(216,"FFDBC0C2"))
    .addPalette(addColor(255,"FFF0E8FF"))
    .build()

    //坚固板
    buildMaterial('kubejs','reinforced_plate')
    .addStat(ArmorStatIds.ARMOR_MAILLE).addStat(ArmorStatIds.SHIELD_CORE).addStat(ArmorStatIds.MAILLE).addStat(ArmorStatIds.PLATING_SHIELD)
    .addFallBack(FallBacks.CRYSTAL).setColor("FF241E33")
    .build()

    //红石琥珀金
    buildMaterial('kubejs','fluxed_electrum').addArmor().addMelee().addRanged().addFallBack(FallBacks.METAL).setLuminosity(7).setColor("FFF4DE6A").buildTransformer()
    .buildResprite()
    .addPalette(addColor(0,"FF000000"))
    .addPalette(addColor(63,"FFBA0713"))
    .addPalette(addColor(102,"FFE42319"))
    .addPalette(addColor(140,"FFCD752A"))
    .addPalette(addColor(178,"FFE9A93D"))
    .addPalette(addColor(216,"FFF4DE6A"))
    .addPalette(addColor(255,"FFFCF8D1"))
    .build()

    //精灵钢
    buildMaterial('kubejs','alfsteel')
    .addArmor().addMelee()
    .addFallBack(FallBacks.METAL).setColor("FFF79100").setLuminosity(7)
    .build()

    //热力三锭

    buildMaterial('kubejs','signalum')
    .addMelee().addRanged()
    .addFallBack(FallBacks.METAL).setColor("FFFF2011")
    .build()

    buildMaterial('kubejs','lumium')
    .addArmor().addMelee().addRanged()
    .addFallBack(FallBacks.METAL).setColor("FFFCFA7F").setLuminosity(15)
    .build()

    buildMaterial('kubejs','enderium')
    .addArmor().addMelee().addRanged()
    .addFallBack(FallBacks.METAL).setColor("FF29FFC1")
    .build()

    //高定向热解石墨
    buildMaterial('kubejs','hop_graphite')
    .addMelee()
    .addFallBack(FallBacks.METAL).setColor("FF454545")
    .build()

})