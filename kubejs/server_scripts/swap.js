// event.replaceInput({},'输出物品' , '输入物品')表示
// {mod:'extendedcrafting',output:'extendedcrafting:frame'}是我们熟悉的配方条件筛选，与上一部分内容完全一致，这里是筛选满足模组为合成拓展且输出为黑铁框架的配方
// 'extendedcrafting:black_iron_slate'为输出物品，这里是合成拓展的黑铁框架
// 'mekanism:steel_casing'为输入物品，这里是通用机械的钢制机壳  
//event.replaceInput({mod:'extendedcrafting',output:'extendedcrafting:frame'}, 'extendedcrafting:black_iron_slate' , 'mekanism:steel_casing') 
//这是另一个例子，替换所有满足（模组为热力系列，合成方式为有序合成，不输出铁锭）的配方中的铁为植物魔法的魔力钢锭
//  event.replaceInput({mod:'thermal',type:'crafting_shaped',not:{output:'thermal:iron_gear'}}, '#forge:ingots/iron', 'botania:manasteel_ingot')