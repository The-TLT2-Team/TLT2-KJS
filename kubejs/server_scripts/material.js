ServerEvents.recipes(event=>{
    function metalMaterial([materialId,fluid,ingot,temp]){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "fluid": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function customMaterial([ materialId,fluid,ingot,fluidAmount,fluidPerItem,itemCount,temp]){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": fluidPerItem
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "name": fluid,
                    "amount": fluidPerItem
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": fluidAmount
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": fluidAmount
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": itemCount,
                "material": materialId
            }
        )
    }
    function metalMaterialNoIngotMelt(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    function metalMaterialNoNuggetMelt([materialId,fluid,ingot,temp]){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 10
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "temperature": temp,
                "input": materialId,
                "result": {
                    "fluid": fluid,
                    "amount": 10
                }
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function craftableMaterial([materialId,ingred_item]){
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingred_item
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    metalMaterial(["tlt_tech:restructure_chromatic_steel","kubejs:molten_restructure_chromatic_steel","kubejs:restructure_chromatic_steel",7650])
    metalMaterial(["tlt_tech:awaken_chromatic_steel","kubejs:molten_awaken_chromatic_steel","kubejs:awaken_chromatic_steel",16384])
    craftableMaterial(["tlt_tech:compressed_chromatic_steel","kubejs:compressed_chromatic_steel"])
    craftableMaterial(["tlt_tech:pneumatic_reinforced_titanium","kubejs:pneumatic_reinforced_titanium"])
})