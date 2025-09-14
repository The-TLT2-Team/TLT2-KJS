ServerEvents.recipes(event=>{
    event.recipes.thermal.smelter('2x tlt_tech:fu_dust',['2x mekanism:yellow_cake_uranium','mekanism:dust_fluorite'])
    event.recipes.thermal.smelter('16x tlt_tech:ck_indused_fu_dust',['8x tlt_tech:fu_dust','immersiveengineering:dust_hop_graphite','3x thermal:niter_dust'])
event.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 4,
      "item": "tinkers_advanced:penumatic_reinforced_steel"
    },
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "tconstruct:manyullyn_ingot"
    },
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "kubejs:penumatic_reinforced_titanium"
    },
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 1,
      "item": "thermal:upgrade_augment_3"
    }
  ],
  "pressure": 2.5,
  "results": [
    {
      "item": "tlt_tech:upgrade_augment_pneumatic"
    }
  ]
})

event.recipes.thermal.smelter(Item.of('kubejs:restructure_chromatic_steel').withChance(3),['kubejs:compressed_chromatic_steel','tinkers_advanced:irradium_ingot','tinkers_advanced:protocite_pellet'])
    
})