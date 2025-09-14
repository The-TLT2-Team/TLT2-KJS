ServerEvents.recipes(event => {
    function thermalPenumaticOreSmelt(oreTag,fluidOutPut,outPutAmount){
        event.custom(
            {
                "type": "pneumaticcraft:thermo_plant",
                "exothermic": false,
                "fluid_input": {
                    "type": "pneumaticcraft:fluid",
                    "amount": 20,
                    "fluid": "tconstruct:blazing_blood"
                },
                "fluid_output": {
                    "amount": outPutAmount,
                    "fluid": fluidOutPut
                },
                "item_input": {
                    "tag": oreTag
                },
                "temperature": {
                    "min_temp": 773
                },
                "pressure": 3.0,
                "speed": 6
            }
        )
    }

    function thermalPenumaticOreItemSmelt(oreItem,fluidOutPut,outPutAmount){
        event.custom(
            {
                "type": "pneumaticcraft:thermo_plant",
                "exothermic": false,
                "fluid_input": {
                    "type": "pneumaticcraft:fluid",
                    "amount": 20,
                    "fluid": "tconstruct:blazing_blood"
                },
                "fluid_output": {
                    "amount": outPutAmount,
                    "fluid": fluidOutPut
                },
                "item_input": {
                    "item": oreItem
                },
                "temperature": {
                    "min_temp": 773
                },
                "pressure": 3.0,
                "speed": 6
            }
        )
    }

    function thermalIngotChilling(fluid,item){
        event.custom(
            {
                
                "type": "thermal:chiller",
                "ingredients": [
                    {
                        "fluid": fluid,
                        "amount": 90
                    },
                    {
                        "item": "thermal:chiller_ingot_cast"
                    }
                ],
                "result": [
                    {
                        "item": item,
                        "count": 1
                    }
                ],
                "energy": 4800
                
            }
        )
    }

    let metals = [
        "iron",
        "gold",
        "copper",
        "nickel",
        "tin",
        "lead",
        "uranium",
        "osmium",
        "cobalt",
        "aluminum",
        "silver",
        "zinc"
    ]

    for(let metal of metals){
        var raw = "forge:raw_materials/"+metal;
        var ore = "forge:ores/"+metal
        var fluid = "tconstruct:molten_"+metal
        thermalPenumaticOreSmelt(raw,fluid,360)
        thermalPenumaticOreSmelt(ore,fluid,540)
    }

    thermalPenumaticOreItemSmelt("minecraft:ancient_debris","tconstruct:molten_debris",540)

    thermalIngotChilling("tconstruct:molten_zinc","create:zinc_ingot")
    thermalIngotChilling("tconstruct:molten_osmium","mekanism:ingot_osmium")
    thermalIngotChilling("tconstruct:molten_uranium","mekanism:ingot_uranium")

    event.remove({id:'thermal:compat/create/pulverizer_create_tuf'})
    event.remove({id:'thermal:compat/create/pulverizer_create_tuf_recycle'})
    event.remove({id:'thermal:compat/create/pulverizer_create_diorite_recycle'})
    event.remove({id:'thermal:machines/pulverizer/pulverizer_diorite'})

    event.recipes.thermal.pulverizer([
        Item.of('immersiveengineering:raw_aluminum').withChance(0.75),
        Item.of('thermal:raw_tin').withChance(0.25),
        Item.of('minecraft:raw_iron').withChance(0.5),
        Item.of('thermal:raw_nickel').withChance(0.25)
    ],'minecraft:tuff')

    event.recipes.thermal.pulverizer([
        Item.of('mekanism:dust_osmium').withChance(0.25),
        Item.of('thermal:gold_dust').withChance(0.25),
        Item.of('thermal:silver_dust').withChance(0.5),
        Item.of('thermal:copper_dust').withChance(0.75)
    ],'minecraft:cobbled_deepslate')

    event.recipes.thermal.pulverizer([
        Item.of('refinedstorage:silicon').withChance(0.5),
        Item.of('minecraft:coal').withChance(0.75),
        Item.of('minecraft:lapis_lazuli').withChance(0.25),
        Item.of('minecraft:quartz').withChance(0.5)
    ],'minecraft:diorite')

    event.recipes.thermal.bottler('minecraft:tuff',['minecraft:sand',Fluid.of('minecraft:lava',100)])
    event.recipes.thermal.crystallizer('minecraft:diorite',
        ['minecraft:gravel',Fluid.of('tconstruct:molten_glass',10)]).energy(100)
    event.recipes.thermal.crystallizer(Item.of('minecraft:quartz').withChance(4),
        ['minecraft:quartz',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('minecraft:glowstone_dust').withChance(2),
        ['minecraft:glowstone',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('mekanism:fluorite_gem').withChance(8),
        ['mekanism:fluorite_gem',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('minecraft:amethyst_cluster').withChance(4),
        ['minecraft:amethyst_cluster',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('minecraft:diamond').withChance(4),
        ['minecraft:diamond',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('minecraft:emerald').withChance(4),
        ['minecraft:emerald',Fluid.of('mekanism:brine',100)]).energy(10000)

    event.recipes.thermal.crystallizer(Item.of('thermal:niter').withChance(4),
        ['thermal:niter',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('thermal:cinnabar').withChance(4),
        ['thermal:cinnabar',Fluid.of('mekanism:brine',100)]).energy(10000)
    event.recipes.thermal.crystallizer(Item.of('thermal:sulfur').withChance(4),
        ['thermal:sulfur',Fluid.of('mekanism:brine',100)]).energy(10000)

    event.recipes.thermal.crystallizer(Item.of('tconstruct:sky_slime_crystal_cluster').withChance(4),
        ['tconstruct:sky_slime_crystal_cluster',Fluid.of('mekanism:brine',100)]).energy(1600)
    event.recipes.thermal.crystallizer(Item.of('tconstruct:earth_slime_crystal_cluster').withChance(4),
        ['tconstruct:earth_slime_crystal_cluster',Fluid.of('mekanism:brine',100)]).energy(1600)
    event.recipes.thermal.crystallizer(Item.of('tconstruct:ichor_slime_crystal_cluster').withChance(4),
        ['tconstruct:ichor_slime_crystal_cluster',Fluid.of('mekanism:brine',100)]).energy(1600)
    event.recipes.thermal.crystallizer(Item.of('tconstruct:ender_slime_crystal_cluster').withChance(4),
        ['tconstruct:ender_slime_crystal_cluster',Fluid.of('mekanism:brine',100)]).energy(1600)

    event.recipes.tconstruct.melting(Fluid.of('tconstruct:molten_diamond',400),'createoreexcavation:raw_diamond').temperature(1400).time(10)
    event.recipes.tconstruct.melting(Fluid.of('tconstruct:molten_emerald',400),'createoreexcavation:raw_emerald').temperature(1400).time(10)
})