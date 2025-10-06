ServerEvents.recipes(event=>{
    
    //磁极倒转
    buildModifierRecipe("tlt_tech:reverse_polarity",event)
    .addTool("tinkers_advanced:ionized_cannon")
    .addSlot(SlotTypes.ABILITIES,1)
    .addInput("mekanism:electrolytic_core")
    .addInput("immersiveengineering:circuit_board")
    .setAllowCrystal().setLevelRange(0,1)
    .buildRecipe().buildSalvage()

})
// Item.of('')