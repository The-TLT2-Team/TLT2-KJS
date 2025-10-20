ServerEvents.recipes(event=>{
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

  event.recipes.thermal.crystallizer(Item.of('mekanism:alloy_infused',16).withChance(1),[Fluid.of('thermal:redstone',400),'16x iron_ingot']).energy(1600)
  event.recipes.thermal.crystallizer(Item.of('mekanism:alloy_reinforced',16).withChance(1),[Fluid.of('tconstruct:molten_diamond',400),'16x mekanism:alloy_infused']).energy(1600)
  event.recipes.thermal.crystallizer(Item.of('mekanism:alloy_atomic',16).withChance(1),[Fluid.of('tconstruct:molten_refined_obsidian',360),'16x mekanism:alloy_reinforced']).energy(1600)
  event.recipes.thermal.compression_fuel(Fluid.of('mekanism:ethene',1000),3000000)
  event.remove({id:'redstone_arsenal:materials/flux_gem'})
  event.remove({id:'redstone_arsenal:materials/flux_ingot_fire_charge'})
  event.remove({id:'redstone_arsenal:smelting/flux_ingot_from_dust_blasting'})
  event.remove({id:'redstone_arsenal:smelting/flux_ingot_from_dust_smelting'})
  event.remove({id:'redstone_arsenal:materials/flux_dust'})
  event.remove({id:'thermal:compat/redstone_arsenal/smelter_rsa_alloy_flux'})
  event.remove({id:'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
  event.remove({id:'redstone_arsenal:materials/flux_plating'})
  event.recipes.thermal.bottler(Item.of('redstone_arsenal:flux_dust'),[Fluid.of('thermal:redstone',500),Item.of('thermal:electrum_dust')])
  event.recipes.thermal.press(Item.of('redstone_arsenal:flux_plating'),[Item.of('redstone_arsenal:flux_ingot',2),Item.of('redstone_arsenal:flux_gem')])
  event.recipes.thermal.press('kubejs:compressed_polonium',Item.of('kubejs:polonium_dust',10))
  event.recipes.thermal.press('kubejs:compressed_plutonium',Item.of('kubejs:plutonium_dust',10))
  event.recipes.thermal.press(Item.of('create:brass_sheet'),Item.of('create:brass_ingot'))
  event.recipes.thermal.smelter_catalyst('tinkers_advanced:blaze_netherite').useChance(0.1).minChance(0).energyMod(0.75).primaryMod(5).secondaryMod(5)
  event.recipes.thermal.pulverizer_catalyst('tinkers_advanced:basalz_signalum').useChance(0.1).minChance(0).energyMod(0.75).primaryMod(5).secondaryMod(5)
  event.recipes.thermal.smelter(Item.of('tinkers_advanced:blaze_netherite',2),['2x netherite_ingot','blaze_powder'])
  event.recipes.thermal.smelter(['kubejs:radon_indused_fuel','15x glass_bottle'],['tlt_tech:ck_indused_fu_dust','16x alexscaves:radon_bottle'])
  event.recipes.thermal.centrifuge([Item.of('tlt_tech:high_performance_reactor_fuel').withChance(0.25),'glass_bottle'],['kubejs:radon_indused_fuel'])
})