ServerEvents.recipes(event=>{
    event.recipes.mekanism.oxidizing('kubejs:plutonium_dust',{amount:1000,gas:'mekanism:plutonium'})
    event.recipes.mekanism.oxidizing('kubejs:polonium_dust',{amount:1000,gas:'mekanism:polonium'})
    event.recipes.mekanism.oxidizing('tlt_tech:reactive_nuclear_waste',{amount:2000,gas:'mekanism:nuclear_waste'})
    event.remove({id:'mekanism:processing/uranium/reprocessing/to_fuel'})

    event.recipes.thermal.smelter('mekanism:pellet_polonium',['kubejs:polonium_dust','mekanism:dust_fluorite'])
    event.recipes.thermal.smelter('mekanism:pellet_plutonium',['kubejs:plutonium_dust','mekanism:dust_fluorite'])
    event.recipes.thermal.centrifuge([Item.of('kubejs:polonium_dust').withChance(0.5),Item.of('kubejs:plutonium_dust').withChance(0.5),Item.of('thermal:lead_dust').withChance(2),Item.of('mekanism:dust_uranium').withChance(0.1)],'tlt_tech:reactive_nuclear_waste')

    event.recipes.mekanism.crushing('kubejs:polonium_dust','mekanism:pellet_polonium')
    event.recipes.mekanism.crushing('kubejs:plutonium_dust','mekanism:pellet_plutonium')

    event.remove({id:'mekanismgenerators:fission_reactor/casing'})
    event.remove({id:'mekanismgenerators:fission_reactor/fuel_assembly'})

    event.shaped('4x mekanismgenerators:fission_reactor_casing',
        [
            ' C ',
            'DBF',
            ' E '
        ],
        {
            B:'mekanism:steel_casing',
            C:'#forge:storage_blocks/lead',
            D:'#forge:storage_blocks/signalum',
            E:'#forge:storage_blocks/invar',
            F:'#forge:storage_blocks/electrum',
        }
    )
    event.shaped('mekanismgenerators:fission_fuel_assembly',
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A:'thermal:lead_block',
            B:'immersiveengineering:storage_steel',
            C:'mekanism:basic_chemical_tank'
        }
    )
    event.replaceInput({id:'mekanismgenerators:reactor/glass'},'#forge:ingots/lead','mekanismgenerators:fission_reactor_casing')
    event.recipes.mekanism.nucleosynthesizing('minecraft:gold_ore',{amount:1,gas:'mekanism:antimatter'},'tinkers_advanced:iridium_lean_ore').duration(10)

    event.recipes.mekanism.oxidizing('kubejs:compressed_polonium',{amount:10000,gas:'mekanism:polonium'})
    event.recipes.mekanism.oxidizing('kubejs:compressed_plutonium',{amount:10000,gas:'mekanism:plutonium'})
    event.recipes.mekanism.rotary().fluidInput(Fluid.of('tinkers_advanced:molten_antimatter',1)).fluidOutput(Fluid.of('tinkers_advanced:molten_antimatter',1)).gasInput({amount:4,gas:'mekanism:antimatter'}).gasOutput({amount:4,gas:'mekanism:antimatter'})
})