ServerEvents.tags("item", event => {
    event.add("tconstruct:modifiable/harvest", ['tinkers_thinking:mace']);
    event.add("tconstruct:modifiable/harvest", ['tconstruct:melting_pan']);
    event.add("tconstruct:modifiable/harvest", ['tconstruct:battlesign']);
    event.add("tconstruct:modifiable/harvest", ['tinkersinnovation_teleport_staff']);
    event.add("tconstruct:modifiable/harvest", ['tinkers_battle_spades:battle_spade']);
    event.add("tconstruct:modifiable/harvest", ['tconstruct:swasher']);

    event.removeAll('tconstruct:modifiable/ancient')
})
ServerEvents.tags("block",event=>{
    event.add("alexscaves:galena_gen_replaceables",'#ad_astra:mercury_stone_replaceables')
})