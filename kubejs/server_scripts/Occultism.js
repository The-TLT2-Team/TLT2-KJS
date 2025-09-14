ServerEvents.recipes(e => {
	e.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:craft",
    "activation_item": {
      "item": "occultism:soul_gem"
    },
    "pentacle_id": "occultism:craft_djinni",
    "duration": 90,
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/craft_familiar_ring"
    },
    "ingredients": [
      {
        "item": "cataclysm:black_steel_ingot"
      },
      {
        "item": "tinkersinnovation:enchantment_ingot"
      },
      {
        "item": "tinkersinnovation:slimton_ingot"
      },
      {
        "item": "tinkersinnovation:polychrome_alloy_ingot"
      },
      {
        "item": "twilightforest:knightmetal_ingot"
      },
      {
        "item": "tinkers_ingenuity:knight_crystal_ingot"
      },
      {
        "item": "twilightforest:carminite"
      }
    ],
    "result": {
      "item": "kubejs:roaring_crystal"
    }
  }
  )
})