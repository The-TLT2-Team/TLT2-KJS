ServerEvents.recipes(event=>{
    event.recipes.tconstruct.casting_basin(Item.of('create:rotation_speed_controller')).cast_consumed(true).cast('create:gearbox').fluid(Fluid.of('tconstruct:molten_brass',720)).cooling_time(100)
})