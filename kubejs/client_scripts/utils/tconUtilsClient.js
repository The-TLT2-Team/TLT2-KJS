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