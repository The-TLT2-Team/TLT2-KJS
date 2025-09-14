ServerEvents.recipes(event=>{
    event.recipes.mekanism.oxidizing('kubejs:plutonium_dust',{amount:1000,gas:'mekanism:plutonium'})
    event.recipes.mekanism.oxidizing('kubejs:polonium_dust',{amount:1000,gas:'mekanism:polonium'})
    event.recipes.mekanism.oxidizing('tlt_tech:reactive_nuclear_waste',{amount:500,gas:'mekanism:nuclear_waste'})
    event.remove({id:'mekanism:processing/uranium/reprocessing/to_fuel'})

    event.recipes.thermal.smelter('mekanism:pellet_polonium',['kubejs:polonium_dust','mekanism:dust_fluorite'])
    event.recipes.thermal.smelter('mekanism:pellet_plutonium',['kubejs:plutonium_dust','mekanism:dust_fluorite'])
    event.recipes.thermal.centrifuge([Item.of('kubejs:polonium_dust').withChance(0.5),Item.of('kubejs:plutonium_dust').withChance(0.5),Item.of('thermal:lead_dust').withChance(2),Item.of('mekanism:dust_uranium').withChance(0.1)],'tlt_tech:reactive_nuclear_waste')

    event.recipes.mekanism.crushing('kubejs:polonium_dust','mekanism:pellet_polonium')
    event.recipes.mekanism.crushing('kubejs:plutonium_dust','mekanism:pellet_plutonium')

    event.remove({id:'mekanismgenerators:fission_reactor/casing'})
    event.remove({id:'mekanismgenerators:fission_reactor/fuel_assembly'})

    event.shaped('mekanismgenerators:fission_reactor_casing',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A:'thermal:lead_ingot',
            B:'mekanism:steel_casing'
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
    event.replaceInput({id:'mekanismgenerators:reactor/glass'},'#forge:ingots/lead','thermal:lead_block')
    event.recipes.mekanism.nucleosynthesizing('kubejs:restructure_chromatic_steel',{amount:1000,gas:'mekanism:antimatter'},'kubejs:awaken_chromatic_steel').duration(10)
})