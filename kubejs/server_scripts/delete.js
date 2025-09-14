//ServerEvents.recipes(event => {
//删除配方输出为石砖的所有配方
//  event.remove({output : 'stone_bricks'});
//删除配方中包含石砖的所有配方
// event.remove({input : 'stone_bricks'});
//删除模组id为minecraft中的所有配方
//  event.remove({mod : 'minecraft'});
//删除配方id为oak_wood的配方(四个橡木原木合成的橡木)
//  event.remove({id : "minecraft:oak_wood"});
//删除熔炉这个工作方块里的所有配方
//  event.remove({type : "smelting"});
//});
ServerEvents.recipes(event => {
    event.remove({ output: 'tcintegrations:molten_manasteel' });
    event.remove({ output: 'tcintegrations:molten_dragonsteel_fire' });
    event.remove({ output: 'tcintegrations:molten_dragonsteel_ice' });
    event.remove({ output: 'tcintegrations:molten_dragonsteel_lightning' });
    event.remove({ output: 'tcintegrations:molten_manasteel' });
    event.remove({ id: "pneumaticcraft:pressure_chamber/pressure_chamber_disenchanting" });
    event.remove({ id: "tinkerscalibration:tools/materials/melting/carminite/block" });
    event.remove({ id: "tinkerscalibration:tools/materials/melting/carminite/carminite" });
    event.remove({ id: "tinkerscalibration:tools/materials/casting/carminite/gem_gold_cast" });
    event.remove({ id: "tinkerscalibration:tools/materials/casting/carminite/gem_sand_cast" });
});