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
      "item": "kubejs:pneumatic_reinforced_titanium"
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
  
event.shaped('tlt_tech:dynamo_upgrade_1',[
      'ABA',
      'CDE',
      'ABA'
    ],{
      A:'aether:ambrosium_shard',
      B:'thermal:niter',
      C:'thermal:dynamo_fuel_augment',
      D:'kubejs:augment_base_pneumatic',
      E:'thermal:dynamo_fuel_augment'
    })
event.shaped('tlt_tech:machine_catalyst_upgrade_1',[
      'ABA',
      'CDE',
      'ABA'
    ],{
      A:'aether:ambrosium_shard',
      B:'thermal:cinnabar',
      C:'thermal:machine_output_augment',
      D:'kubejs:augment_base_pneumatic',
      E:'thermal:machine_catalyst_augment'
    })
event.shaped('8x tlt_tech:machine_speed_upgrade_1',[
      'ACA',
      'BDB',
      'ACA'
    ],{
      A:'kubejs:augment_base_pneumatic',
      B:'thermal:machine_speed_augment',
      C:'twilightforest:knightmetal_ingot',
      D:'twilightforest:fiery_ingot'
    })
event.shaped('8x tlt_tech:range_upgrade_1',[
      'ABA',
      'BDB',
      'ABA'
    ],{
      A:'kubejs:augment_base_pneumatic',
      B:'thermal:area_radius_augment',
      D:'aether_tinker:valkyrie'
    })

event.shaped('4x tlt_tech:upgrade_augment_densium',[
      'ABA',
      'CDC',
      'ABA'
    ],{
      A:'tinkers_advanced:densium_ingot',
      B:'mekanism:ultimate_control_circuit',
      C:'tlt_tech:upgrade_augment_pneumatic',
      D:'aether_redux:gravitite_ingot'
    })
event.shaped('2x tlt_tech:upgrade_augment_activated_chroma',[
      'ABA',
      'CDC',
      'ABA'
    ],{
      A:'kubejs:compressed_chromatic_steel',
      B:'twilightforest:castle_brick',
      C:'tlt_tech:upgrade_augment_densium',
      D:'deep_aether:stratus_ingot'
    })

event.shaped('tlt_tech:dynamo_upgrade_2',[
      'ABA',
      'CDE',
      'AFA'
    ],{
      A:'aether:golden_amber',
      B:'thermal:niter',
      C:'l2hostility:fiery',
      D:'kubejs:augment_base_densium',
      E:'l2hostility:soul_burner',
      F:'tlt_tech:dynamo_upgrade_1'
    })
event.shaped('tlt_tech:machine_catalyst_upgrade_2',[
      'ABA',
      'CDE',
      'AFA'
    ],{
      A:'aether:golden_amber',
      B:'thermal:cinnabar',
      C:'l2hostility:split',
      D:'kubejs:augment_base_densium',
      E:'l2hostility:growth',
      F:'tlt_tech:machine_catalyst_upgrade_1'
    })
event.shaped('8x tlt_tech:machine_speed_upgrade_2',[
      'ACA',
      'BDB',
      'ACA'
    ],{
      A:'kubejs:augment_base_densium',
      B:'tlt_tech:machine_speed_upgrade_1',
      C:'ad_astra:ostrum_ingot',
      D:'ad_astra:desh_block'
    })
event.shaped('8x tlt_tech:range_upgrade_2',[
      'ABA',
      'BDB',
      'ABA'
    ],{
      A:'kubejs:augment_base_densium',
      B:'tlt_tech:range_upgrade_1',
      D:'aether_tinker:valkyrie'
    })
})