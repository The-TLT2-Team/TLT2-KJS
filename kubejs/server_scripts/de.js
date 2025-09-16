ServerEvents.recipes(event=>{
    event.custom(
{
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "kubejs:restructure_chromatic_steel"
  },
  "ingredients": [
    {
      "item": "tinkers_advanced:osgloglas_ingot"
    },
    {
      "item": "tinkers_advanced:densium_ingot"
    },
    {
      "item": "mekanism_extras:absolute_control_circuit"
    },
    {
      "item": "create:precision_mechanism"
    }
  ],
  "result": {
    "item": "kubejs:unformed_hephaestus_ingot"
  },
  "tier": "WYVERN",
  "total_energy": 256000
}
    )

  event.custom(
{
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "kubejs:hephaestus_ingot"
  },
  "ingredients": [
    {
      "item": "mekanism:pellet_antimatter"
    },
    {
      "item": "mekanism:pellet_antimatter"
    },
    {
      "item": "tinkers_advanced:antimony_ingot"
    },
    {
      "item": "tinkers_advanced:bismuth_ingot"
    },
    {
      "item": "kubejs:restructure_chromatic_steel"
    },
    {
      "item": "kubejs:restructure_chromatic_steel"
    }
  ],
  "result": {
    "item": "kubejs:awaken_chromatic_steel"
  },
  "tier": "WYVERN",
  "total_energy": 100000000
}
  )
})