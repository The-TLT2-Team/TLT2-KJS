StartupEvents.registry("fluid",event=>{
    function createFluid([name,temp]) {
        let newFluid = event.create(name).temperature(temp)
        let newFluidAttributes = newFluid.createAttributes();
        newFluidAttributes.dropOff(2);
        newFluidAttributes.tickDelay(20);
        newFluid.attributes = newFluidAttributes;
    }
    function createThinFluid([name,color,temp]) {
        let newFluid = event.create(name).thinTexture(color).bucketColor(color).temperature(temp).displayName(name)
        let newFluidAttributes = newFluid.createAttributes();
        newFluidAttributes.dropOff(2);
        newFluidAttributes.tickDelay(20);
        newFluid.attributes = newFluidAttributes;
    }
    function createThickFluid([name,color,temp]) {
        let newFluid = event.create(name).thickTexture(color).bucketColor(color).temperature(temp).displayName(name)
        let newFluidAttributes = newFluid.createAttributes();
        newFluidAttributes.dropOff(2);
        newFluidAttributes.tickDelay(20);
        newFluid.attributes = newFluidAttributes;
    }

    createFluid(['kubejs:molten_awaken_chromatic_steel',5000])
    createFluid(['kubejs:molten_restructure_chromatic_steel',5000])
})