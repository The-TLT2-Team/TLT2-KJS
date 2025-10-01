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
ClientEvents.highPriorityAssets(event=>{
    function buildMaterial(nameSpace,id){
        const renderInfoBuilder = {
            color:"000000",
            fallbacks:[],
            luminosity:0,
            supportedStats:[],
            setLuminosity:(luminosity)=>{
                renderInfoBuilder.luminosity = luminosity;
                return renderInfoBuilder
            },
            setColor:(color)=>{
                renderInfoBuilder.color = color;
                return renderInfoBuilder
            },
            addStat:(stat) =>{
                renderInfoBuilder.supportedStats.push(stat);
                return renderInfoBuilder;
            },
            addMelee:()=>{
                renderInfoBuilder.supportedStats.push(
                    MeleeStatIds.BINDING,
                    MeleeStatIds.HANDLE,
                    MeleeStatIds.HEAD
                )
                return renderInfoBuilder;
            },
            addRanged:()=>{
                renderInfoBuilder.supportedStats.push(
                    RangedStatIds.BOW_STRING,
                    RangedStatIds.GRIP,
                    RangedStatIds.LIMB
                )
                return renderInfoBuilder;
            },
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
            addFallBack:(fallback)=>{
                renderInfoBuilder.fallbacks.push(fallback);
                return renderInfoBuilder;
            },
            buildTransformer(){
                return transformerBuilder;
            },
            build:()=>{
                event.add(nameSpace+':tinkering/materials/'+id,{
                    "color":renderInfoBuilder.color,
                    "fallbacks":renderInfoBuilder.fallbacks,
                    "luminosity":renderInfoBuilder.luminosity,
                })
            }
        }
        const transformerBuilder = {
                    palette:[],
                    transformer:{},
                    buildRecolor:()=>{
                        const recolorSpriteBuilder = {
                            addPalette:(palette)=> {
                                transformerBuilder.palette.push(palette)
                                return recolorSpriteBuilder;
                            },
                            build:()=>{
                                transformerBuilder.transformer = {
                                    "type": "tconstruct:recolor_sprite",
                                    "color_mapping": {
                                        "type": "tconstruct:grey_to_color",
                                        "palette":transformerBuilder.palette
                                    }
                                }
                                renderInfoBuilder.build();
                            }
                        }
                    },
                    buildResprite:()=>{
                        const respriteBuilder = {
                            addPalette:(palette)=> {
                                transformerBuilder.palette.push(palette)
                                return respriteBuilder;
                            },
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

    buildMaterial('kubejs','hephaestus').addArmor().addMelee().addRanged().addFallBack(FallBacks.METAL).setColor("FF555555").buildTransformer()
    .buildResprite().addPalette(addColor(0,"FF000000"))
    .addPalette(addPath(63,"kubejs:materials/hephaestus_dark"))
    .addPalette(addPath(102,"kubejs:materials/hephaestus_dark"))
    .addPalette(addPath(140,"kubejs:materials/hephaestus_lightest"))
    .addPalette(addPath(178,"kubejs:materials/hephaestus_extra_light"))
    .addPalette(addPath(216,"kubejs:materials/hephaestus_light"))
    .addPalette(addPath(255,"kubejs:materials/hephaestus_medium")).build()

    buildMaterial('kubejs','orechidysprosium').addArmor().addMelee().addRanged().addFallBack(FallBacks.METAL).setColor("FFE3E091").buildTransformer()
    .buildResprite().addPalette(addColor(0,"FF000000"))
    .addPalette(addColor(63,"FF4A4025"))
    .addPalette(addColor(102,"FF857137"))
    .addPalette(addColor(140,"FFA1925E"))
    .addPalette(addColor(178,"FFC2A58D"))
    .addPalette(addColor(216,"FFDBC0C2"))
    .addPalette(addColor(255,"FFF0E8FF")).build()
    
    buildMaterial('kubejs','reinforced_plate')
    .addStat(ArmorStatIds.ARMOR_MAILLE).addStat(ArmorStatIds.SHIELD_CORE).addStat(ArmorStatIds.MAILLE).addStat(ArmorStatIds.PLATING_SHIELD)
    .addFallBack(FallBacks.CRYSTAL).setColor("FF241E33").build()

})