ServerEvents.recipes(e => {

    e.custom({
  "type": "pneumaticcraft:heat_properties",
  "block": "aether:icestone",
  "temperature": 233,
  "thermalResistance": 1})
  e.custom({
  "type": "pneumaticcraft:heat_properties",
  "block": "goety:freezing_lamp",
  "temperature": 243,
  "thermalResistance": 5
})
  e.remove({id:"pneumaticcraft:block_heat_properties/occultism/spirit_fire"})
  e.custom({
  "type": "pneumaticcraft:heat_properties",
  "block": "occultism:spirit_fire",
  "temperature": 1700,
  "thermalResistance": 100
})
e.remove({id:'pneumaticcraft:block_heat_properties/create/blaze_burner_fading'})
e.remove({id:'pneumaticcraft:block_heat_properties/create/blaze_burner_kindled'})
e.remove({id:'pneumaticcraft:block_heat_properties/create/blaze_burner_seething'})
e.remove({id:'pneumaticcraft:block_heat_properties/create/blaze_burner_smouldering'})
    e.replaceOutput({id:"pneumaticcraft:assembly/advanced_pressure_tube"},'pneumaticcraft:advanced_pressure_tube','pneumaticcraft:reinforced_pressure_tube')
    e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "tinkers_advanced:penumatic_reinforced_steel"
  },
  "program": "drill",
  "result": {
    "count": 4,
    "item": "kubejs:augment_base_pneumatic"
  }
    })
    e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "tinkers_advanced:densium_ingot"
  },
  "program": "drill",
  "result": {
    "count": 4,
    "item": "kubejs:augment_base_densium"
  }
    })
    e.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
            "item": "aether_redux:sentry_chip"
        },
        "program": "drill",
         "result": {
            "count": 16,
            "item": "pneumaticcraft:printed_circuit_board"
        }
    })

    e.remove({id:'pneumaticcraft:fluid_mixer/mix_obsidian'})
    e.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "input1": {
    "type": "pneumaticcraft:fluid",
    "amount": 100,
    "fluid": "minecraft:water"
  },
  "input2": {
    "type": "pneumaticcraft:fluid",
    "amount": 100,
    "fluid": "minecraft:lava"
  },
  "item_output": {
    "item": "minecraft:obsidian"
  },
  "pressure": 0.5,
  "time": 5
})
e.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "input1": {
    "type": "pneumaticcraft:fluid",
    "amount": 180,
    "fluid": "tinkerscalibration:moltentitanium"
  },
  "input2": {
    "type": "pneumaticcraft:fluid",
    "amount": 10,
    "fluid": "tinkers_advanced:molten_iridium"
  },
  "item_output": {
    "item": "kubejs:pneumatic_reinforced_titanium"
  },
  "pressure": 1,
  "time": 20
})

e.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "tinkers_advanced:penumatic_reinforced_steel"
    },
    {
      "item": "kubejs:penumatic_reinforced_titanium"
    },
    {
      "item": "tinkers_advanced:activated_chromatic_steel"
    },
    {
        "item":"pneumaticcraft:printed_circuit_board"
    }
  ],
  "pressure": 3.5,
  "results": [
    {
      "count": 3,
      "item": "kubejs:compressed_chromatic_steel"
    }
  ]

})

e.replaceInput({type:'crafting_shaped',mod:'pneumaticcraft',input:"pneumaticcraft:advanced_pressure_tube"},'pneumaticcraft:advanced_pressure_tube','pneumaticcraft:reinforced_pressure_tube')
e.remove({id:'pneumaticcraft:thermo_plant/reinforced_pressure_tube'})
e.remove({id:'pneumaticcraft:assembly/advanced_pressure_tube'})
e.custom({
      "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 20,
    "item": "pneumaticcraft:pressure_chamber_valve"
  },
  "program": "laser",
  "result": {
    "count": 32,
    "item": "pneumaticcraft:reinforced_pressure_tube"
  }
})
e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "tconstruct:obsidian_reinforcement"
  },
  "program": "drill",
  "result": {
    "count": 8,
    "item": "create:sturdy_sheet"
  }
    })
e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "tconstruct:gold_reinforcement"
  },
  "program": "drill",
  "result": {
    "count": 4,
    "item": "create:precision_mechanism"
  }
    })
    
    e.shaped('64x pneumaticcraft:reinforced_stone',[
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A:'tconstruct:seared_brick',
        B:'pneumaticcraft:ingot_iron_compressed'
    }
)
e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "minecraft:iron_block"
  },
  "program": "drill",
  "result": {
    "count": 4,
    "item": "thermal:machine_frame"
  }
    })
  e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "immersiveengineering:sheetmetal_steel"
  },
  "program": "drill",
  "result": {
    "count": 2,
    "item": "immersiveengineering:heavy_engineering"
  }
    })
  e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "immersiveengineering:sheetmetal_iron"
  },
  "program": "drill",
  "result": {
    "count": 2,
    "item": "immersiveengineering:light_engineering"
  }
    })
  e.custom({
        "type": "pneumaticcraft:assembly_drill",
  "input": {
    "item": "immersiveengineering:storage_steel"
  },
  "program": "drill",
  "result": {
    "count": 4,
    "item": "mekanism:steel_casing"
  }
    })

  e.shaped('32x pneumaticcraft:pressure_tube',[
        '   ',
        'ABA',
        '   '
    ],
    {
        B:'tconstruct:seared_glass',
        A:'pneumaticcraft:ingot_iron_compressed'
    }
  )

e.custom(
            {
                "type": "pneumaticcraft:thermo_plant",
                "exothermic": false,
                "fluid_input": {
                    "type": "pneumaticcraft:fluid",
                    "amount": 250,
                    "fluid": "tconstruct:molten_glass"
                },
                "item_output": {
                    "item": "goety:jade"
                },
                "item_input": {
                    "item": "thermal:emerald_dust"
                },
                "temperature": {
                    "min_temp": 773
                },
                "pressure": 3.0,
                "speed": 1.5
            }
        )

  e.shaped('16x tlt_tech:advanced_safety_upgrade',
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A:'aether_redux:veridium_ingot',
      B:'pneumaticcraft:security_upgrade',
      C:'aether_tinker:valkyrie'
    }
  )

  e.custom({
  "type": "pneumaticcraft:fluid_mixer",
  "input1": {
    "type": "pneumaticcraft:fluid",
    "amount": 1000,
    "fluid": "tinkers_advanced:over_heated_lava"
  },
  "input2": {
    "type": "pneumaticcraft:fluid",
    "amount": 300,
    "fluid": "pneumaticcraft:lpg"
  },
  "fluid_output": {
    "type": "pneumaticcraft:fluid",
    "amount": 500,
    "fluid": "tinkers_advanced:gaseous_lava"
  },
  "pressure": 2.5,
  "time": 40
})
e.shaped('8x pneumaticcraft:advanced_pressure_tube',[
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A:'pneumaticcraft:pressure_tube',
        B:'tlt_tech:advanced_safety_upgrade'
    }
)
e.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 1,
      "item": "minecraft:coal"
    },
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "pneumaticcraft:ingot_iron_compressed"
    }
  ],
  "pressure": 2.5,
  "results": [
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "thermal:steel_dust"
    }
  ]
})

e.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "item": "tinkers_advanced:densium_ingot"
    }
  ],
  "pressure": 256,
  "results": [
    {
      "type": "pneumaticcraft:stacked_item",
      "count": 2,
      "item": "avaritia:neutron_ingot"
    }
  ]
})

e.custom({
  "type": "pneumaticcraft:heat_properties",
  "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.fading",
  "block": "create:blaze_burner",
  "statePredicate": {
    "blaze": "fading"
  },
  "temperature": 1700,
  "thermalResistance": 100
})
e.custom({
  "type": "pneumaticcraft:heat_properties",
  "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.kindled",
  "block": "create:blaze_burner",
  "statePredicate": {
    "blaze": "kindled"
  },
  "temperature": 2000,
  "thermalResistance": 20
})
e.custom({
  "type": "pneumaticcraft:heat_properties",
  "description": "pneumaticcraft.gui.jei.description.create_blaze_burner.seething",
  "block": "create:blaze_burner",
  "statePredicate": {
    "blaze": "seething"
  },
  "temperature": 2200,
  "thermalResistance": 1
})
// function pneumaticArmorCraft(itemHelemet,itemChest,itemLegging,itemBoot,materialId,materialItem){
// e.custom(
//   {
//     "type": "pneumaticcraft:pressure_chamber",
//     "inputs": [
//       {
//         "item": itemHelemet
//       },
//       {
//         "type": "pneumaticcraft:stacked_item",
//         "count": 2,
//         "item": materialItem
//       }
//     ],
//     "pressure": 2.0,
//     "results": [
//       {
//         "item": "tconstruct:helmet_plating",
//         "count": 1,
//         "nbt": "{Material:\""+materialId+"\"}"
//       }
//     ]
//   }
// )
// e.custom(
//   {
//     "type": "pneumaticcraft:pressure_chamber",
//     "inputs": [
//       {
//         "item": itemChest
//       },
//       {
//         "type": "pneumaticcraft:stacked_item",
//         "count": 6,
//         "item": materialItem
//       }
//     ],
//     "pressure": 2.0,
//     "results": [
//       {
//         "item": "tconstruct:chestplate_plating",
//         "count": 1,
//         "nbt": "{Material:\""+materialId+"\"}"
//       }
//     ]
//   }
// )
// e.custom(
//   {
//     "type": "pneumaticcraft:pressure_chamber",
//     "inputs": [
//       {
//         "item": itemLegging
//       },
//       {
//         "type": "pneumaticcraft:stacked_item",
//         "count": 5,
//         "item": materialItem
//       }
//     ],
//     "pressure": 2.0,
//     "results": [
//       {
//         "item": "tconstruct:leggings_plating",
//         "count": 1,
//         "nbt": "{Material:\""+materialId+"\"}"
//       }
//     ]
//   }
// )
// e.custom(
//   {
//     "type": "pneumaticcraft:pressure_chamber",
//     "inputs": [
//       {
//         "item": itemBoot
//       },
//       {
//         "type": "pneumaticcraft:stacked_item",
//         "count": 2,
//         "item": materialItem
//       }
//     ],
//     "pressure": 2.0,
//     "results": [
//       {
//         "item": "tconstruct:boots_plating",
//         "count": 1,
//         "nbt": "{Material:\""+materialId+"\"}"
//       }
//     ]
//   }
// )
// }

// pneumaticArmorCraft("pneumaticcraft:compressed_iron_helmet",
//   "pneumaticcraft:compressed_iron_chestplate",
//   "pneumaticcraft:compressed_iron_leggings",
//   "pneumaticcraft:compressed_iron_boots",
//   "tlt_tech:pneumatic_reinforced_titanium",
//   "kubejs:pneumatic_reinforced_titanium")
// pneumaticArmorCraft("pneumaticcraft:compressed_iron_helmet",
//   "pneumaticcraft:compressed_iron_chestplate",
//   "pneumaticcraft:compressed_iron_leggings",
//   "pneumaticcraft:compressed_iron_boots",
//   "tlt_tech:compressed_chromatic_steel",
//   "kubejs:compressed_chromatic_steel")

})