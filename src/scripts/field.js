
// create an empty array
let growingPlants = []

// this function must accept a seed object as input
// the function will add the seed to the field
export const addPlant = (seed) => {
    return growingPlants.push(seed)
}


// copy the growingPlants array into this function
export const usePlants = (arrayOfPlants) => {
    const copyGrowingPlants = arrayOfPlants 
    let copy = []
for (const rows of copyGrowingPlants) {
    // for (const seed of rows)
    if (rows.isArray) {
        for (const obj of rows) {
            copy.push(obj)
        }
    }
    else {copy.push(rows)}
}

 return copy 
}

