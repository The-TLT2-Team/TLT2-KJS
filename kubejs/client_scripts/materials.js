
/**
 * 相关函数(ctrl点击以跳转)：
 * @see buildMaterial
 */
ClientEvents.highPriorityAssets(event=>{
    setAssetsEvent(event)

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

    //辐光合金
    buildMaterial('kubejs','alloy_radiance')
    .addArmor().addMelee().addRanged()
    .addFallBack(FallBacks.METAL).setColor("FFE2FB43").setLuminosity(15)
    .build()

    //热核合金
    buildMaterial('kubejs','alloy_thermalnuclear')
    .addMelee()
    .addFallBack(FallBacks.METAL).setColor("FFEF4345").setLuminosity(15)
    .build()

    //工程塑胶
    buildMaterial('kubejs','duroplast').addMelee().addStat(RangedStatIds.BOW_STRING).addFallBack(FallBacks.CRYSTAL).setLuminosity(4).setColor("CCBA8D5A")
    .buildTransformer().buildResprite()
    .addPalette(addColor(0,"00000000"))
    .addPalette(addColor(63,"FF8C5020"))
    .addPalette(addColor(102,"FF9C6030"))
    .addPalette(addColor(140,"90B1855A"))
    .addPalette(addColor(178,"B0B1855A"))
    .addPalette(addColor(216,"D0B1855A"))
    .addPalette(addColor(255,"D0CF9B69"))
    .build()

    //钕合金
    buildMaterial('kubejs','scarlet_neodymium').addMelee().addFallBack(FallBacks.METAL).setLuminosity(10).setColor("FFED103D")
    .buildTransformer().buildResprite()
    .addPalette(addColor(0,"FF000000"))
    .addPalette(addColor(63,"FF6E0002"))
    .addPalette(addColor(102,"FF850002"))
    .addPalette(addColor(140,"FF9C1215"))
    .addPalette(addColor(178,"FFC7171A"))
    .addPalette(addColor(216,"FFF20004"))
    .addPalette(addColor(255,"FFFF4D50"))
    .build()

    buildMaterial('kubejs','azure_neodymium').addArmor().addFallBack(FallBacks.METAL).setLuminosity(10).setColor("FF3D10ED")
    .buildTransformer().buildResprite()
    .addPalette(addColor(0,"FF000000"))
    .addPalette(addColor(63,"FF02006E"))
    .addPalette(addColor(102,"FF020085"))
    .addPalette(addColor(140,"FF15129C"))
    .addPalette(addColor(178,"FF1A17C7"))
    .addPalette(addColor(216,"FF0400F2"))
    .addPalette(addColor(255,"FF504DFF"))
    .build()

})