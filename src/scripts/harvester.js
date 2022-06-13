// the function must accept the plants array as input


export const harvestPlants = (growingPlants) => {
    let harvest = []
    // the function will return an array of seed objects which is my seedArray

    // iterate the array of growing plants
    for (const grow of growingPlants) {
        if (grow.type === "Corn") {
            const growing = grow.output
            for (let i = 0; i < grow.output / 2; i++) {
                harvest.push(grow)
            }

        }
        // get the value of the output property
        else {
            for (let i = 0; i < grow.output; i++) {
                harvest.push(grow)
            }
        }
        // if the output of an object is 2 then console.log it twice
    }

    return harvest


}