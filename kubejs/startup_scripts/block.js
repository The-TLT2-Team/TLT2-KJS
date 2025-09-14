StartupEvents.registry("block",event=>{
    event.create("mekanism:indium_casing","basic").requiresTool(true).hardness(2.5).resistance(4).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').material('netherite').soundType(SoundType.METAL)
})